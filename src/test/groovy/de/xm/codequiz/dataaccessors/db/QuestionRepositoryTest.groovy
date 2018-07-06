package de.xm.codequiz.dataaccessors.db

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.data.domain.PageRequest
import org.springframework.transaction.annotation.Transactional
import spock.lang.Specification

@SpringBootTest
class QuestionRepositoryTest extends Specification {

  @Autowired
  QuestionRepository questionRepository

  @Autowired
  CategoryRepository categoryRepository

  @Transactional
  def "should return a Random Question"() {
    given:
      def categoryJavaScript = categoryRepository.save(new CategoryEntity(UUID.randomUUID(), "JavaScript"))
      questionRepository.save(new QuestionEntity(
        UUID.randomUUID(),
        categoryJavaScript,
        "true === undefined",
        [
          new AnswerEntity(UUID.randomUUID(), "Ja", false),
          new AnswerEntity(UUID.randomUUID(), "N¡ein", true)
        ]
      ))

    when:
      def questionsJavaScript = questionRepository.findAllByCategoryNameIgnoreCase(new PageRequest(0, 10), "JavaScript")
      def questionsGo = questionRepository.findAllByCategoryNameIgnoreCase(new PageRequest(0, 10), "Go")
    then:
      questionsJavaScript.getContent().size() == 1
      questionsGo.getContent().isEmpty()
  }
}
