package de.xm.codequiz.entrypoints

import de.xm.codequiz.dataaccessors.db.*
import groovy.json.JsonSlurper
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.MockMvc
import org.springframework.transaction.annotation.Transactional
import spock.lang.Specification
import spock.lang.Unroll

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get

@SpringBootTest
@AutoConfigureMockMvc
class QuestionControllerTest extends Specification {

  @Autowired
  private CategoryRepository categoryRepository

  @Autowired
  private QuestionRepository questionRepository

  @Autowired
  private MockMvc mockMvc

  @Unroll
  @Transactional
  def "should return the questions for the category '#category'"() {
    given:
      def categoryJavaScript = categoryRepository.save(new CategoryEntity(UUID.randomUUID(), "JavaScript"))
      def categoryKotlin = categoryRepository.save(new CategoryEntity(UUID.randomUUID(), "Kotlin"))

      questionRepository.save(
        new QuestionEntity(UUID.randomUUID(), categoryJavaScript, "true === undefined", [
          new AnswerEntity(UUID.randomUUID(), "Yes", false),
          new AnswerEntity(UUID.randomUUID(), "No", true)
        ])
      )
      questionRepository.save(
        new QuestionEntity(UUID.randomUUID(), categoryJavaScript, "null == undefined", [
          new AnswerEntity(UUID.randomUUID(), "Yes", false),
          new AnswerEntity(UUID.randomUUID(), "No", true)
        ])
      )

      questionRepository.save(
        new QuestionEntity(UUID.randomUUID(), categoryKotlin, "what is object.id!!", [
          new AnswerEntity(UUID.randomUUID(), "Id is nullable and throws a NPE when its null on Get", true),
          new AnswerEntity(UUID.randomUUID(), "transforms id to a boolean which indicates if its not null", false)
        ])
      )

    expect:
      def response = mockMvc.perform(
        get("/api/questions/${category}")
          .param("page", "0")
          .param("size", "2")
          .contentType(MediaType.APPLICATION_JSON)
      ).andReturn().response
      response.status == 200

      def hateOsBody = new JsonSlurper().parseText(response.contentAsString)
      hateOsBody._embedded.questionEntities.size() == resultSize

    where:
      category     || resultSize
      "JavaScript" || 2
      "javascript" || 2
      "JAVASCRIPT" || 2
      "Kotlin"     || 1
      "KOTLIN"     || 1
  }

  @Unroll
  @Transactional
  def "should return 204 when there is no content"() {
    when:
      def response = mockMvc.perform(
        get("/api/questions/StarWarsFanFragen")
          .param("page", "0")
          .param("size", "100")
          .contentType(MediaType.APPLICATION_JSON)
      ).andReturn().response

    then:
      response.status == 204
  }
}
