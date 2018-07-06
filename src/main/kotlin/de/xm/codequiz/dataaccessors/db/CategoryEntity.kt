package de.xm.codequiz.dataaccessors.db

import java.time.Instant
import java.util.*
import javax.persistence.*

@Entity(name = "Category")
@Table(name = "category")
data class CategoryEntity(

    @Id
    var id: UUID?,
    var name: String?,
    var createdAt: Instant = Instant.now(),

    @OneToMany(cascade = [CascadeType.ALL])
    @JoinColumn(name = "category_id", nullable = false, insertable = false, updatable = false)
    var questions: List<QuestionEntity>) {

    constructor (id: UUID, name: String) : this(id, name, Instant.now(), emptyList())
    constructor () : this(null, null, Instant.now(), emptyList())
}
