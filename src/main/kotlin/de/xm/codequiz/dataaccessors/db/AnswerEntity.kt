package de.xm.codequiz.dataaccessors.db

import java.util.*
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity(name = "Answer")
@Table(name = "answer")
data class AnswerEntity(
    @Id
    var id: UUID?,
    var answer: String?,
    var correctAnswer: Boolean) {

    constructor() : this(null, null, false)
}
