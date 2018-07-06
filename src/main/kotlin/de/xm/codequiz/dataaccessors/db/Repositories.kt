package de.xm.codequiz.dataaccessors.db

import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface CategoryRepository : JpaRepository<CategoryEntity, UUID>

@Repository
interface QuestionRepository : JpaRepository<QuestionEntity, UUID> {

    fun findAllByCategoryNameIgnoreCase(pageable: Pageable, categoryName: String): Page<QuestionEntity>
}
