

| Term                     | Definition                                                                                                               | More                                                        |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| user                     | An entity that is using some functionalities provided by expert-parakeet.                                                |                                                             |
| question                 | General question, which can be expressed in multiple ways, always containing a question statement.                       |                                                             |
| question-statement       | Text specifying the task/question a student has to fulfill/answer.                                                       |                                                             |
| question-set             | A collection of questions referred to as a "test" in the domain.                                                         |                                                             |
| free-text question       | A question that expects an answer in free-text form.                                                                     |                                                             |
| multiple-choice question | A question for which multiple possible-solutions can be chosen from a predefined selection of possible-solutions.        |                                                             |
| single-choice question   | A question for which only one possible-solution can be chosen from a predefined selection of possible-solutions.         |                                                             |
| drag-and-drop question   | A question for which answers have to be arranged in a certain way.                                                       | (Not implemented)                                           |
| answer                   | A selection/statement to a certain question provided by a student.                                                       |                                                             |
| answer-set               | A set of selections/statements corresponding to a question-set provided by the administrator.                            | (Not implemented)                                           |
| possible-solution        | A predefined option a user can choose as an answer. Possible-solutions are defined by the administrator.                 |                                                             |
| solution                 | The correct answer to a question defined by the administrator. (Should be one of the possible-solutions for a question.) | Not applicable to all question types.                       |
| point                    | A unit for quantifying the correctness of an answer provided by a student.                                               |                                                             |
| grading                  | A number of points given to an answer by a corrector or auto-grading.                                                    |                                                             |
| auto-grading             | A system that automatically grades a answer.                                                                             | Not applicable to all question types.                       |
| evaluation-criteria      | A set of specifications provided by the administrator to the correctors to provide grading guidelines.                   | Mostly used where auto-grading is not applicable.           |
| class                    | Refers to a university class. It has question-sets assigned to it.                                                       |                                                             |
| class-name               | Name referring to a specific class                                                                                       |                                                             |
| course                   | An iteration of a class in a certain semester.                                                                           |                                                             |
| student                  | A user that is allowed to answer question-sets from certain classes.                                                     |                                                             |
| corrector                | A user that is allowed to evaluate question-sets answered by students.                                                   |                                                             |
| correction               | A pair of a grading and a feedback given by a corrector to a certain answer.                                             |                                                             |
| correction-set           | A collection of corrections of which correspond to a answer-set provided by the student.                                 | Automatic back reference to question-set. (Not implemented) |
| administrator            | A user that is able to create and edit question-sets.                                                                    |                                                             |






## Fragen die sich hieraus ergeben haben

Sollen Korrektoren auch Tests anpassen können?

Clarification: die antwort in der Korrektur ist nur eine referrenz auf die Antwort die der User gegeben hat.  
Vorschlage: Antwort referenz über antwort id anstatt gesamte Antwort mit zu liefern.

Vlt brauchen wir ein Korrection-set

Wir haben eine duplikation der question art. Wir haben ein enum qeustion/type, welches uns verrät, was für einen type wir haben
und dann haben wir noch für jeden typ ein eigenes spec.


