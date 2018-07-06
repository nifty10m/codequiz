package de.xm.codequiz.configuration

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty
import org.springframework.boot.autoconfigure.flyway.FlywayMigrationStrategy
import org.springframework.context.annotation.Bean
import java.sql.SQLException

class DatabaseConfiguration {

    /**
     * Custom flyway strategy that clears the database contents before executing migrations.
     */
    @Bean
    @ConditionalOnProperty(value = ["flyway.clean-on-startup"], havingValue = "true")
    fun cleanMigrationStrategy(): FlywayMigrationStrategy {

        return FlywayMigrationStrategy { flyway ->
            try {
                flyway.dataSource.connection.use { connection ->
                    connection.createStatement()
                        .use { dropPostgis -> dropPostgis.execute("DROP EXTENSION IF EXISTS postgis CASCADE") }
                    connection.createStatement()
                        .use { dropFuzzystrmatch -> dropFuzzystrmatch.execute("DROP EXTENSION IF EXISTS fuzzystrmatch CASCADE") }

                    flyway.clean()
                    flyway.migrate()
                }
            } catch (e: SQLException) {
                throw RuntimeException("Fatal error on database migration", e)
            }
        }

    }
}
