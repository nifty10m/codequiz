package de.xm.codequiz.domain.usecases.findquestions

import de.xm.codequiz.dataaccessors.db.QuestionEntity
import de.xm.codequiz.dataaccessors.db.QuestionRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

@Service
class FindQuestionsForCategory(val questionRepository: QuestionRepository) {

    fun handle(category: String, pageable: Pageable): Page<QuestionEntity> {
        return questionRepository.findAllByCategoryNameIgnoreCase(pageable, category)
    }
}
