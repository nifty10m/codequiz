package de.xm.codequiz.entrypoints

import de.xm.codequiz.dataaccessors.db.QuestionEntity
import de.xm.codequiz.domain.usecases.findquestions.FindQuestionsForCategory
import org.springframework.data.domain.Pageable
import org.springframework.data.web.PageableDefault
import org.springframework.data.web.PagedResourcesAssembler
import org.springframework.hateoas.Resource
import org.springframework.hateoas.Resources
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*

@Service
@RequestMapping("/api/questions")
@RestController
class QuestionController(val findQuestionForCategory: FindQuestionsForCategory) {

    @GetMapping("/{category}", produces = ["application/json"])
    fun findNextQuestion(@PathVariable("category") category: String,
                         @PageableDefault pageable: Pageable,
                         pagedResourcesAssembler: PagedResourcesAssembler<QuestionEntity>): ResponseEntity<Resources<Resource<QuestionEntity>>> {

        val questionPage = findQuestionForCategory.handle(category.toLowerCase(Locale.GERMAN), pageable)

        if (questionPage.totalElements == 0L) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build()
        } else {
            return ResponseEntity.ok(pagedResourcesAssembler.toResource(questionPage))

        }
    }
}
