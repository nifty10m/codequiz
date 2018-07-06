package de.xm.codequiz.domain.usecases.findcategories

import de.xm.codequiz.dataaccessors.db.CategoryRepository
import org.springframework.stereotype.Service

@Service
class FindCategories(val categoryRepository: CategoryRepository) {

    fun handle(): List<String> {
        return categoryRepository.findAll().map { it.name!! }
    }
}
