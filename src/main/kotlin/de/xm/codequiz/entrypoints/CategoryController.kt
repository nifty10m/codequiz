package de.xm.codequiz.entrypoints

import de.xm.codequiz.domain.usecases.findcategories.FindCategories
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@Service
@RequestMapping("/api/categories")
@RestController
class CategoryController(val findCategories: FindCategories) {

    @GetMapping
    fun findCategorieNames(): ResponseEntity<List<String>> {
        return ResponseEntity.ok(findCategories.handle())
    }
}
