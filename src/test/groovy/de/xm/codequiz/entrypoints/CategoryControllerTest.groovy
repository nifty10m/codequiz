package de.xm.codequiz.entrypoints

import de.xm.codequiz.dataaccessors.db.CategoryEntity
import de.xm.codequiz.dataaccessors.db.CategoryRepository
import groovy.json.JsonSlurper
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.web.servlet.MockMvc
import org.springframework.transaction.annotation.Transactional
import spock.lang.Specification

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get

@SpringBootTest
@AutoConfigureMockMvc
class CategoryControllerTest extends Specification {

  @Autowired
  private MockMvc mockMvc

  @Autowired
  private CategoryRepository categoryRepository;

  @Transactional
  def "should return all Category Names"() {
    given:
      categoryRepository.deleteAll()
      categoryRepository.saveAll([
        new CategoryEntity(UUID.randomUUID(), "JavaScript"),
        new CategoryEntity(UUID.randomUUID(), "Go"),
        new CategoryEntity(UUID.randomUUID(), "Java"),
        new CategoryEntity(UUID.randomUUID(), "Kotlin"),
      ])

    when:
      def response = mockMvc.perform(get("/api/categories")).andReturn().response

      def responseBody = new JsonSlurper().parseText(response.contentAsString);
    then:
      response.status == 200

      responseBody.size == 4
      responseBody.containsAll(["JavaScript",
                                "Go",
                                "Java",
                                "Kotlin"])
  }
}
