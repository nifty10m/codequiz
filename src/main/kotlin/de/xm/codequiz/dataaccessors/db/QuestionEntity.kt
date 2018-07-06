package de.xm.codequiz.dataaccessors.db

import java.util.*
import javax.persistence.*

@Entity(name = "Question")
@Table(name = "question")
data class  QuestionEntity(
    @Id
    var id: UUID?,
    @ManyToOne
    var category: CategoryEntity?,
    var question: String?,

    @OneToMany(cascade = [CascadeType.ALL])
    @JoinColumn(name = "question_id")
    var answers: List<AnswerEntity> = arrayListOf()) {

    constructor() : this(null, null, null, arrayListOf())
}

