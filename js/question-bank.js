/**
 * Edit Quest: Question Bank
 * Contains all challenges organized by style guide, region, and difficulty
 */

const QuestionBank = (function() {
  'use strict';

  /**
   * Question structure:
   * {
   *   id: unique-id,
   *   type: 'multiple-choice' | 'true-false' | 'fill-in-blank' | 'drag-drop' | 'p5-interactive',
   *   styleGuide: 'mla' | 'apa' | 'cms',
   *   region: 'comma-castle' | 'mla-mountain' | 'apa-abyss' | 'cms-city',
   *   difficulty: 'beginner' | 'intermediate' | 'expert',
   *   question: 'Question text',
   *   options: ['A', 'B', 'C', 'D'], // for multiple-choice
   *   correctAnswer: 'B' | true | 'text answer',
   *   explanation: 'Detailed explanation of the rule',
   *   points: 10-50,
   *   timeLimit: 30 // seconds (optional)
   * }
   */

  const questions = {
    // ==========================================================================
    // MLA STYLE GUIDE
    // ==========================================================================
    mla: {
      'comma-castle': [
        // BEGINNER
        {
          id: 'mla-cc-b1',
          type: 'multiple-choice',
          styleGuide: 'mla',
          region: 'comma-castle',
          difficulty: 'beginner',
          question: 'In MLA style, which sentence correctly uses a comma in a series?',
          options: [
            'I need to buy apples oranges and bananas.',
            'I need to buy apples, oranges and bananas.',
            'I need to buy apples, oranges, and bananas.',
            'I need to buy apples oranges, and bananas.'
          ],
          correctAnswer: 'I need to buy apples, oranges, and bananas.',
          explanation: 'MLA style requires the use of the Oxford comma (also called the serial comma) before the conjunction in a series of three or more items.',
          points: 10,
          timeLimit: 30
        },
        {
          id: 'mla-cc-b2',
          type: 'true-false',
          styleGuide: 'mla',
          region: 'comma-castle',
          difficulty: 'beginner',
          question: 'In MLA style, you should place a comma after an introductory phrase.',
          correctAnswer: true,
          explanation: 'True. MLA style recommends using a comma after introductory words, phrases, or clauses. Example: "After the lecture, we went to dinner."',
          points: 10,
          timeLimit: 20
        },
        {
          id: 'mla-cc-b3',
          type: 'multiple-choice',
          styleGuide: 'mla',
          region: 'comma-castle',
          difficulty: 'beginner',
          question: 'Which sentence correctly uses commas with a coordinating conjunction?',
          options: [
            'She studied hard but she still failed the test.',
            'She studied hard, but she still failed the test.',
            'She studied hard but, she still failed the test.',
            'She studied, hard but she still failed the test.'
          ],
          correctAnswer: 'She studied hard, but she still failed the test.',
          explanation: 'When joining two independent clauses with a coordinating conjunction (for, and, nor, but, or, yet, so), place a comma before the conjunction.',
          points: 10,
          timeLimit: 30
        },
        {
          id: 'mla-cc-b4',
          type: 'true-false',
          styleGuide: 'mla',
          region: 'comma-castle',
          difficulty: 'beginner',
          question: 'Commas should be used to separate items in a series, even if the items are only two words long.',
          correctAnswer: true,
          explanation: 'True. Use commas to separate three or more items in a series, regardless of word count. Example: "red, blue, and green" or "quickly, quietly, and carefully".',
          points: 10,
          timeLimit: 25
        },
        {
          id: 'mla-cc-b5',
          type: 'multiple-choice',
          styleGuide: 'mla',
          region: 'comma-castle',
          difficulty: 'beginner',
          question: 'Which sentence correctly uses a comma with a dependent clause?',
          options: [
            'When you finish the chapter answer the questions.',
            'When you finish the chapter, answer the questions.',
            'When, you finish the chapter answer the questions.',
            'When you finish, the chapter answer the questions.'
          ],
          correctAnswer: 'When you finish the chapter, answer the questions.',
          explanation: 'Use a comma after an introductory dependent clause. The dependent clause ends at "chapter," so the comma goes there.',
          points: 10,
          timeLimit: 30
        },

        // INTERMEDIATE
        {
          id: 'mla-cc-i1',
          type: 'multiple-choice',
          styleGuide: 'mla',
          region: 'comma-castle',
          difficulty: 'intermediate',
          question: 'Which sentence correctly uses commas with a nonrestrictive clause?',
          options: [
            'My brother who lives in Boston is a doctor.',
            'My brother, who lives in Boston is a doctor.',
            'My brother who lives in Boston, is a doctor.',
            'My brother, who lives in Boston, is a doctor.'
          ],
          correctAnswer: 'My brother, who lives in Boston, is a doctor.',
          explanation: 'Nonrestrictive clauses (providing additional, non-essential information) should be set off with commas on both sides. If you have only one brother, the information is nonrestrictive.',
          points: 25,
          timeLimit: 40
        },
        {
          id: 'mla-cc-i2',
          type: 'true-false',
          styleGuide: 'mla',
          region: 'comma-castle',
          difficulty: 'intermediate',
          question: 'In MLA style, you should use a comma before "Jr." or "Sr." in a name.',
          correctAnswer: false,
          explanation: 'False. Current MLA style (9th edition) does not use a comma before Jr. or Sr. Example: Martin Luther King Jr.',
          points: 25,
          timeLimit: 25
        },
        {
          id: 'mla-cc-i3',
          type: 'multiple-choice',
          styleGuide: 'mla',
          region: 'comma-castle',
          difficulty: 'intermediate',
          question: 'Which sentence correctly uses commas with an appositive phrase?',
          options: [
            'My professor Dr. Martinez teaches literature.',
            'My professor, Dr. Martinez teaches literature.',
            'My professor Dr. Martinez, teaches literature.',
            'My professor, Dr. Martinez, teaches literature.'
          ],
          correctAnswer: 'My professor, Dr. Martinez, teaches literature.',
          explanation: 'An appositive (a noun phrase that renames another noun) should be set off with commas on both sides when it provides additional, nonessential information.',
          points: 25,
          timeLimit: 35
        },
        {
          id: 'mla-cc-i4',
          type: 'true-false',
          styleGuide: 'mla',
          region: 'comma-castle',
          difficulty: 'intermediate',
          question: 'In MLA style, use a comma to separate two adjectives when they could be connected by "and".',
          correctAnswer: true,
          explanation: 'True. Use commas between coordinate adjectives: "a long, difficult exam" (you could say "a long and difficult exam"). Don\'t use commas with cumulative adjectives like "a beautiful red car".',
          points: 25,
          timeLimit: 30
        },
        {
          id: 'mla-cc-i5',
          type: 'multiple-choice',
          styleGuide: 'mla',
          region: 'comma-castle',
          difficulty: 'intermediate',
          question: 'How should you punctuate a sentence with a quotation and attribution?',
          options: [
            'Smith argues that "education is essential" for social progress.',
            'Smith argues that, "education is essential" for social progress.',
            'Smith argues, that "education is essential" for social progress.',
            'Smith, argues that "education is essential" for social progress.'
          ],
          correctAnswer: 'Smith argues that "education is essential" for social progress.',
          explanation: 'Do not use a comma before "that" when introducing a quotation. Use a comma before a direct quotation only when you don\'t use "that": Smith argues, "Education is essential."',
          points: 25,
          timeLimit: 40
        },

        // EXPERT
        {
          id: 'mla-cc-e1',
          type: 'multiple-choice',
          styleGuide: 'mla',
          region: 'comma-castle',
          difficulty: 'expert',
          question: 'Which is the correct MLA punctuation for a sentence with multiple dependent clauses?',
          options: [
            'Although she was tired after working all day she continued writing because the deadline was approaching.',
            'Although she was tired after working all day, she continued writing because the deadline was approaching.',
            'Although, she was tired after working all day, she continued writing, because the deadline was approaching.',
            'Although she was tired, after working all day, she continued writing because the deadline was approaching.'
          ],
          correctAnswer: 'Although she was tired after working all day, she continued writing because the deadline was approaching.',
          explanation: 'Place a comma after the entire introductory dependent clause. Do not separate the subject from the verb with a comma unless there is an intervening element.',
          points: 40,
          timeLimit: 50
        },
        {
          id: 'mla-cc-e2',
          type: 'true-false',
          styleGuide: 'mla',
          region: 'comma-castle',
          difficulty: 'expert',
          question: 'In MLA style, use a comma after "etc." when it appears in the middle of a sentence.',
          correctAnswer: true,
          explanation: 'True. When "etc." appears mid-sentence, it should be followed by a comma: "books, articles, etc., were examined." However, MLA generally recommends avoiding "etc." in formal writing.',
          points: 40,
          timeLimit: 35
        },
        {
          id: 'mla-cc-e3',
          type: 'multiple-choice',
          styleGuide: 'mla',
          region: 'comma-castle',
          difficulty: 'expert',
          question: 'Which sentence correctly punctuates a complex series with internal commas?',
          options: [
            'The study included participants from Boston, Massachusetts, Portland, Oregon, and Austin, Texas.',
            'The study included participants from Boston, Massachusetts; Portland, Oregon; and Austin, Texas.',
            'The study included participants from Boston; Massachusetts, Portland; Oregon, and Austin; Texas.',
            'The study included participants from: Boston, Massachusetts, Portland, Oregon, and Austin, Texas.'
          ],
          correctAnswer: 'The study included participants from Boston, Massachusetts; Portland, Oregon; and Austin, Texas.',
          explanation: 'Use semicolons to separate items in a series when the items themselves contain commas. This prevents confusion and improves clarity in complex lists.',
          points: 40,
          timeLimit: 50
        },
        {
          id: 'mla-cc-e4',
          type: 'multiple-choice',
          styleGuide: 'mla',
          region: 'comma-castle',
          difficulty: 'expert',
          question: 'How should you punctuate a sentence with a participial phrase in the middle?',
          options: [
            'The students, exhausted from studying returned home.',
            'The students exhausted from studying, returned home.',
            'The students, exhausted from studying, returned home.',
            'The students exhausted, from studying returned home.'
          ],
          correctAnswer: 'The students, exhausted from studying, returned home.',
          explanation: 'A participial phrase that interrupts the main clause should be set off with commas on both sides: "The students, exhausted from studying, returned home."',
          points: 40,
          timeLimit: 45
        },
        {
          id: 'mla-cc-e5',
          type: 'true-false',
          styleGuide: 'mla',
          region: 'comma-castle',
          difficulty: 'expert',
          question: 'In MLA style, a comma should appear before a coordinating conjunction only when it joins two independent clauses, not when it joins two words or phrases.',
          correctAnswer: true,
          explanation: 'True. Use a comma before "and," "but," "or," etc., only when joining independent clauses: "I wrote, and she edited." Don\'t use a comma when joining words/phrases: "I wrote and edited."',
          points: 40,
          timeLimit: 40
        }
      ],

      'mla-mountain': [
        // BEGINNER
        {
          id: 'mla-mm-b1',
          type: 'multiple-choice',
          styleGuide: 'mla',
          region: 'mla-mountain',
          difficulty: 'beginner',
          question: 'How should you cite a book in MLA format?',
          options: [
            'Author Last Name, First Name. Title of Book. Publisher, Year.',
            'Author. Title. Publisher: Year.',
            'Last Name, Author. Title. Publisher. Year.',
            'Title of Book. Author Name. Publisher, Year.'
          ],
          correctAnswer: 'Author Last Name, First Name. Title of Book. Publisher, Year.',
          explanation: 'MLA 9th edition format: Author. Title. Publisher, Publication Date. Example: Smith, John. The Great Novel. Penguin, 2020.',
          points: 15,
          timeLimit: 40
        },
        {
          id: 'mla-mm-b2',
          type: 'true-false',
          styleGuide: 'mla',
          region: 'mla-mountain',
          difficulty: 'beginner',
          question: 'In MLA format, book titles should be italicized.',
          correctAnswer: true,
          explanation: 'True. Book titles, journal titles, and other standalone works should be italicized in MLA format.',
          points: 10,
          timeLimit: 20
        },
        {
          id: 'mla-mm-b3',
          type: 'fill-in-blank',
          styleGuide: 'mla',
          region: 'mla-mountain',
          difficulty: 'beginner',
          question: 'Complete the in-text citation: According to Smith, "the results were significant" (_____).',
          correctAnswer: '23',
          acceptableAnswers: ['23', 'p. 23', 'page 23'],
          explanation: 'MLA in-text citations include the author\'s last name and page number in parentheses: (Smith 23). If the author is named in the signal phrase, only the page number is needed: (23).',
          points: 15,
          timeLimit: 30
        },

        // INTERMEDIATE
        {
          id: 'mla-mm-i1',
          type: 'multiple-choice',
          styleGuide: 'mla',
          region: 'mla-mountain',
          difficulty: 'intermediate',
          question: 'How do you cite a work with two authors in MLA format?',
          options: [
            'Smith and Jones. Title. Publisher, Year.',
            'Smith, John, and Mary Jones. Title. Publisher, Year.',
            'Smith, John and Jones, Mary. Title. Publisher, Year.',
            'Smith, J., & Jones, M. Title. Publisher, Year.'
          ],
          correctAnswer: 'Smith, John, and Mary Jones. Title. Publisher, Year.',
          explanation: 'For two authors, list both in the order they appear on the source. Reverse only the first author\'s name, followed by a comma and "and" before the second author\'s name in regular order.',
          points: 30,
          timeLimit: 45
        },
        {
          id: 'mla-mm-i2',
          type: 'multiple-choice',
          styleGuide: 'mla',
          region: 'mla-mountain',
          difficulty: 'intermediate',
          question: 'How should you format a website citation in MLA 9th edition?',
          options: [
            'Author. "Title of Page." Website Name, URL. Accessed Date.',
            'Author. "Title of Page." Website Name, Publisher, Date, URL.',
            '"Title of Page." Website. Date. URL.',
            'Author (Date). Title of page. Website Name. URL'
          ],
          correctAnswer: 'Author. "Title of Page." Website Name, Publisher, Date, URL.',
          explanation: 'MLA 9th edition: Author. "Title of Page." Website Name, Publisher, Date published, URL. Include an access date only if no publication date is available.',
          points: 30,
          timeLimit: 50
        },

        // EXPERT
        {
          id: 'mla-mm-e1',
          type: 'multiple-choice',
          styleGuide: 'mla',
          region: 'mla-mountain',
          difficulty: 'expert',
          question: 'Which citation correctly formats an article from a database in MLA 9th edition?',
          options: [
            'Johnson, Maria. "Climate Change Effects." Environmental Science, vol. 45, no. 3, 2022, pp. 112-130.',
            'Johnson, Maria. "Climate Change Effects." Environmental Science 45.3 (2022): 112-130. JSTOR.',
            'Johnson, M. (2022). Climate change effects. Environmental Science, 45(3), 112-130.',
            'Johnson. "Climate Change Effects." Environmental Science. 2022. pp. 112-130. Database.'
          ],
          correctAnswer: 'Johnson, Maria. "Climate Change Effects." Environmental Science, vol. 45, no. 3, 2022, pp. 112-130.',
          explanation: 'MLA 9th edition simplified database citations. Include: Author. "Article Title." Journal Title, volume, issue, year, pages. Omit database name and URL for common databases.',
          points: 50,
          timeLimit: 60
        }
      ]
    },

    // ==========================================================================
    // APA STYLE GUIDE
    // ==========================================================================
    apa: {
      'comma-castle': [
        // BEGINNER
        {
          id: 'apa-cc-b1',
          type: 'true-false',
          styleGuide: 'apa',
          region: 'comma-castle',
          difficulty: 'beginner',
          question: 'APA style requires the use of the Oxford comma (serial comma) in lists.',
          correctAnswer: true,
          explanation: 'True. APA 7th edition requires the use of the Oxford comma before the conjunction in a series: "The colors were red, white, and blue."',
          points: 10,
          timeLimit: 20
        },
        {
          id: 'apa-cc-b2',
          type: 'multiple-choice',
          styleGuide: 'apa',
          region: 'comma-castle',
          difficulty: 'beginner',
          question: 'In APA style, how should you punctuate a list within a sentence?',
          options: [
            'The study examined three variables: age height and weight.',
            'The study examined three variables: age, height, and weight.',
            'The study examined three variables; age, height, and weight.',
            'The study examined three variables, age, height, and weight.'
          ],
          correctAnswer: 'The study examined three variables: age, height, and weight.',
          explanation: 'Use a colon to introduce a list after a complete independent clause, then separate items with commas (including the Oxford comma).',
          points: 10,
          timeLimit: 30
        },
        {
          id: 'apa-cc-b3',
          type: 'true-false',
          styleGuide: 'apa',
          region: 'comma-castle',
          difficulty: 'beginner',
          question: 'In APA style, use a comma before "and" when joining two independent clauses.',
          correctAnswer: true,
          explanation: 'True. Use a comma before a coordinating conjunction (and, but, or, nor, for, so, yet) when it joins two independent clauses: "The data were collected, and the analysis began."',
          points: 10,
          timeLimit: 25
        },
        {
          id: 'apa-cc-b4',
          type: 'multiple-choice',
          styleGuide: 'apa',
          region: 'comma-castle',
          difficulty: 'beginner',
          question: 'Which sentence uses commas correctly in APA style?',
          options: [
            'The researcher conducted interviews collected data and analyzed results.',
            'The researcher conducted interviews, collected data, and analyzed results.',
            'The researcher, conducted interviews collected data and analyzed results.',
            'The researcher conducted interviews collected data, and analyzed results.'
          ],
          correctAnswer: 'The researcher conducted interviews, collected data, and analyzed results.',
          explanation: 'Use commas to separate items in a series of three or more, including before the final "and" (Oxford comma).',
          points: 10,
          timeLimit: 30
        },
        {
          id: 'apa-cc-b5',
          type: 'multiple-choice',
          styleGuide: 'apa',
          region: 'comma-castle',
          difficulty: 'beginner',
          question: 'In APA style, how should you punctuate an introductory phrase?',
          options: [
            'After analyzing the results the researchers drew conclusions.',
            'After analyzing the results, the researchers drew conclusions.',
            'After, analyzing the results the researchers drew conclusions.',
            'After analyzing, the results the researchers drew conclusions.'
          ],
          correctAnswer: 'After analyzing the results, the researchers drew conclusions.',
          explanation: 'Use a comma after an introductory phrase or clause: "After analyzing the results, the researchers drew conclusions."',
          points: 10,
          timeLimit: 30
        },

        // INTERMEDIATE
        {
          id: 'apa-cc-i1',
          type: 'multiple-choice',
          styleGuide: 'apa',
          region: 'comma-castle',
          difficulty: 'intermediate',
          question: 'Which sentence correctly uses semicolons in APA style?',
          options: [
            'The participants were from Boston, Massachusetts, Chicago, Illinois, and Dallas, Texas.',
            'The participants were from Boston, Massachusetts; Chicago, Illinois; and Dallas, Texas.',
            'The participants were from Boston; Massachusetts, Chicago; Illinois, and Dallas; Texas.',
            'The participants were from Boston, Massachusetts, Chicago; Illinois and Dallas, Texas.'
          ],
          correctAnswer: 'The participants were from Boston, Massachusetts; Chicago, Illinois; and Dallas, Texas.',
          explanation: 'Use semicolons to separate items in a series when the items themselves contain commas. This prevents confusion and improves readability.',
          points: 25,
          timeLimit: 40
        },
        {
          id: 'apa-cc-i2',
          type: 'true-false',
          styleGuide: 'apa',
          region: 'comma-castle',
          difficulty: 'intermediate',
          question: 'In APA style, a comma should be used before "and" when joining two independent clauses.',
          correctAnswer: true,
          explanation: 'True. When using a coordinating conjunction (and, but, or, nor, for, so, yet) to join two independent clauses, place a comma before the conjunction.',
          points: 25,
          timeLimit: 30
        },
        {
          id: 'apa-cc-i3',
          type: 'multiple-choice',
          styleGuide: 'apa',
          region: 'comma-castle',
          difficulty: 'intermediate',
          question: 'How should commas be used with nonrestrictive clauses in APA style?',
          options: [
            'Use commas on both sides of the clause.',
            'Use a comma only before the clause.',
            'Use a comma only after the clause.',
            'Do not use commas with nonrestrictive clauses.'
          ],
          correctAnswer: 'Use commas on both sides of the clause.',
          explanation: 'Nonrestrictive clauses (providing additional, nonessential information) should be set off with commas on both sides. Example: "The study, which was funded by NIH, examined..."',
          points: 25,
          timeLimit: 35
        },
        {
          id: 'apa-cc-i4',
          type: 'true-false',
          styleGuide: 'apa',
          region: 'comma-castle',
          difficulty: 'intermediate',
          question: 'In APA style, numbers 1,000 and above should include commas for clarity.',
          correctAnswer: true,
          explanation: 'True. In APA style, use commas in numbers of 1,000 or more: "1,234" or "10,000." Exception: page numbers, binary digits, temperatures, and other specified cases.',
          points: 25,
          timeLimit: 30
        },
        {
          id: 'apa-cc-i5',
          type: 'multiple-choice',
          styleGuide: 'apa',
          region: 'comma-castle',
          difficulty: 'intermediate',
          question: 'Which sentence correctly uses commas with a direct address?',
          options: [
            'Dr. Smith the data support your hypothesis.',
            'Dr. Smith, the data support your hypothesis.',
            'Dr. Smith the data, support your hypothesis.',
            'Dr. Smith the data support, your hypothesis.'
          ],
          correctAnswer: 'Dr. Smith, the data support your hypothesis.',
          explanation: 'Use a comma to set off a direct address (the person being spoken to): "Dr. Smith, the data support your hypothesis." or "The data, Dr. Smith, support your hypothesis."',
          points: 25,
          timeLimit: 35
        },

        // EXPERT
        {
          id: 'apa-cc-e1',
          type: 'multiple-choice',
          styleGuide: 'apa',
          region: 'comma-castle',
          difficulty: 'expert',
          question: 'Which sentence correctly uses commas with multiple coordinate adjectives in APA style?',
          options: [
            'The long, complex, detailed questionnaire was distributed to participants.',
            'The long complex detailed questionnaire was distributed to participants.',
            'The long, complex detailed questionnaire was distributed to participants.',
            'The long complex, detailed questionnaire was distributed to participants.'
          ],
          correctAnswer: 'The long, complex, detailed questionnaire was distributed to participants.',
          explanation: 'Use commas to separate coordinate adjectives (adjectives that equally modify the noun). Test: If you can put "and" between them or reverse their order, they are coordinate.',
          points: 40,
          timeLimit: 50
        },
        {
          id: 'apa-cc-e2',
          type: 'true-false',
          styleGuide: 'apa',
          region: 'comma-castle',
          difficulty: 'expert',
          question: 'In APA style, you should use a comma after "e.g.," and "i.e.," when they appear within parentheses.',
          correctAnswer: true,
          explanation: 'True. In APA style, always use a comma after "e.g.," and "i.e.," Example: "(e.g., depression, anxiety)" or "(i.e., the control group)".',
          points: 40,
          timeLimit: 35
        },
        {
          id: 'apa-cc-e3',
          type: 'multiple-choice',
          styleGuide: 'apa',
          region: 'comma-castle',
          difficulty: 'expert',
          question: 'How should you punctuate a sentence with an introductory participial phrase in APA style?',
          options: [
            'Having completed the survey participants were debriefed.',
            'Having completed the survey, participants were debriefed.',
            'Having completed the survey; participants were debriefed.',
            'Having completed, the survey participants were debriefed.'
          ],
          correctAnswer: 'Having completed the survey, participants were debriefed.',
          explanation: 'Use a comma after an introductory participial phrase (a phrase beginning with a verb form acting as an adjective). The comma separates the phrase from the main clause.',
          points: 40,
          timeLimit: 45
        },
        {
          id: 'apa-cc-e4',
          type: 'multiple-choice',
          styleGuide: 'apa',
          region: 'comma-castle',
          difficulty: 'expert',
          question: 'Which sentence correctly uses commas with a series of phrases in APA style?',
          options: [
            'The study examined behaviors in children in adolescents and in adults.',
            'The study examined behaviors in children, in adolescents, and in adults.',
            'The study examined behaviors in children in adolescents, and in adults.',
            'The study examined behaviors, in children, in adolescents, and in adults.'
          ],
          correctAnswer: 'The study examined behaviors in children, in adolescents, and in adults.',
          explanation: 'When a series consists of phrases (not just single words), use commas to separate them clearly. Include the Oxford comma before "and" in APA style.',
          points: 40,
          timeLimit: 45
        },
        {
          id: 'apa-cc-e5',
          type: 'true-false',
          styleGuide: 'apa',
          region: 'comma-castle',
          difficulty: 'expert',
          question: 'In APA style, when using "such as" to introduce examples, you should use a comma before it only if the examples are nonessential to the meaning.',
          correctAnswer: true,
          explanation: 'True. Use a comma before "such as" when the examples are nonessential: "Many mammals, such as dogs and cats, are domesticated." Omit the comma when essential: "Mammals such as whales live in the ocean."',
          points: 40,
          timeLimit: 40
        }
      ],

      'apa-abyss': [
        // BEGINNER
        {
          id: 'apa-aa-b1',
          type: 'multiple-choice',
          styleGuide: 'apa',
          region: 'apa-abyss',
          difficulty: 'beginner',
          question: 'How should you format a book reference in APA 7th edition?',
          options: [
            'Author, A. A. (Year). Title of book. Publisher.',
            'Author, A. (Year). Title of Book. Publisher.',
            'Author. (Year). Title of book. Publisher.',
            'Author (Year). Title of book, Publisher.'
          ],
          correctAnswer: 'Author, A. A. (Year). Title of book. Publisher.',
          explanation: 'APA 7th edition format: Author, A. A. (Year). Title of book (capitalize only first word and proper nouns). Publisher.',
          points: 15,
          timeLimit: 40
        },
        {
          id: 'apa-aa-b2',
          type: 'true-false',
          styleGuide: 'apa',
          region: 'apa-abyss',
          difficulty: 'beginner',
          question: 'In APA format, book titles should be italicized.',
          correctAnswer: true,
          explanation: 'True. Book titles and journal titles are italicized in APA format, with only the first word and proper nouns capitalized.',
          points: 10,
          timeLimit: 20
        },
        {
          id: 'apa-aa-b3',
          type: 'multiple-choice',
          styleGuide: 'apa',
          region: 'apa-abyss',
          difficulty: 'beginner',
          question: 'What is the correct APA in-text citation format?',
          options: [
            '(Smith, 2020, p. 45)',
            '(Smith 2020: 45)',
            '[Smith, 2020, pg. 45]',
            '(Smith, pg. 45, 2020)'
          ],
          correctAnswer: '(Smith, 2020, p. 45)',
          explanation: 'APA in-text citations use parentheses with author, year, and page number (for direct quotes): (Smith, 2020, p. 45). Use "pp." for multiple pages.',
          points: 15,
          timeLimit: 30
        },

        // INTERMEDIATE
        {
          id: 'apa-aa-i1',
          type: 'multiple-choice',
          styleGuide: 'apa',
          region: 'apa-abyss',
          difficulty: 'intermediate',
          question: 'How do you cite a work with two authors in APA format?',
          options: [
            'Smith, J., & Jones, M. (2021). Title. Publisher.',
            'Smith, J. and Jones, M. (2021). Title. Publisher.',
            'Smith and Jones. (2021). Title. Publisher.',
            'Smith, Jones (2021). Title. Publisher.'
          ],
          correctAnswer: 'Smith, J., & Jones, M. (2021). Title. Publisher.',
          explanation: 'For two authors in APA, use an ampersand (&) between authors in the reference list: Smith, J., & Jones, M. In text, use "and": Smith and Jones (2021) or (Smith & Jones, 2021).',
          points: 30,
          timeLimit: 45
        },
        {
          id: 'apa-aa-i2',
          type: 'multiple-choice',
          styleGuide: 'apa',
          region: 'apa-abyss',
          difficulty: 'intermediate',
          question: 'How should you cite a journal article with a DOI in APA 7th edition?',
          options: [
            'Author, A. A. (Year). Title of article. Journal Name, vol(issue), pages. DOI',
            'Author, A. A. (Year). Title of article. Journal Name, vol(issue), pages. https://doi.org/xxxxx',
            'Author, A. A. (Year). Title of article. Journal Name, vol(issue), pages. Retrieved from https://doi.org/xxxxx',
            'Author, A. A., Year. Title of article. Journal Name. vol(issue): pages. DOI: xxxxx'
          ],
          correctAnswer: 'Author, A. A. (Year). Title of article. Journal Name, vol(issue), pages. https://doi.org/xxxxx',
          explanation: 'APA 7th edition: Author, A. A. (Year). Title of article. Journal Name, volume(issue), pages. https://doi.org/xxxxx. No "Retrieved from" or "DOI:" prefix needed.',
          points: 30,
          timeLimit: 50
        },

        // EXPERT
        {
          id: 'apa-aa-e1',
          type: 'multiple-choice',
          styleGuide: 'apa',
          region: 'apa-abyss',
          difficulty: 'expert',
          question: 'How do you cite a work with 21+ authors in APA 7th edition?',
          options: [
            'List the first 19 authors, then "..." then the final author.',
            'List the first author followed by "et al."',
            'List the first 20 authors, then "..." then the final author.',
            'List all authors up to 21, then use "et al."'
          ],
          correctAnswer: 'List the first 19 authors, then "..." then the final author.',
          explanation: 'For 21+ authors in APA 7th edition: List first 19 authors, insert an ellipsis (...), then list the final author\'s name. Do not use "et al." in the reference list.',
          points: 50,
          timeLimit: 60
        }
      ]
    },

    // ==========================================================================
    // CMS (CHICAGO MANUAL OF STYLE)
    // ==========================================================================
    cms: {
      'comma-castle': [
        // BEGINNER
        {
          id: 'cms-cc-b1',
          type: 'true-false',
          styleGuide: 'cms',
          region: 'comma-castle',
          difficulty: 'beginner',
          question: 'Chicago style recommends using the Oxford comma.',
          correctAnswer: true,
          explanation: 'True. The Chicago Manual of Style recommends using the Oxford comma (serial comma) in a series for clarity.',
          points: 10,
          timeLimit: 20
        },
        {
          id: 'cms-cc-b2',
          type: 'multiple-choice',
          styleGuide: 'cms',
          region: 'comma-castle',
          difficulty: 'beginner',
          question: 'In Chicago style, which sentence uses commas correctly with a date?',
          options: [
            'The conference was held on March 15 2023 in Boston.',
            'The conference was held on March 15, 2023 in Boston.',
            'The conference was held on March 15, 2023, in Boston.',
            'The conference was held on March, 15, 2023, in Boston.'
          ],
          correctAnswer: 'The conference was held on March 15, 2023, in Boston.',
          explanation: 'When a date appears in month-day-year format, use a comma after the day and after the year: March 15, 2023, in Boston.',
          points: 10,
          timeLimit: 30
        },
        {
          id: 'cms-cc-b3',
          type: 'multiple-choice',
          styleGuide: 'cms',
          region: 'comma-castle',
          difficulty: 'beginner',
          question: 'In Chicago style, which sentence uses commas correctly in a series?',
          options: [
            'The menu included soup salad and dessert.',
            'The menu included soup, salad and dessert.',
            'The menu included soup, salad, and dessert.',
            'The menu included soup salad, and dessert.'
          ],
          correctAnswer: 'The menu included soup, salad, and dessert.',
          explanation: 'Chicago style recommends using the Oxford (serial) comma in a series: item, item, and item.',
          points: 10,
          timeLimit: 25
        },
        {
          id: 'cms-cc-b4',
          type: 'true-false',
          styleGuide: 'cms',
          region: 'comma-castle',
          difficulty: 'beginner',
          question: 'In Chicago style, use a comma before a coordinating conjunction when joining two independent clauses.',
          correctAnswer: true,
          explanation: 'True. Use a comma before coordinating conjunctions (and, but, or, nor, for, so, yet) when joining two independent clauses: "The book was long, but it was engaging."',
          points: 10,
          timeLimit: 25
        },
        {
          id: 'cms-cc-b5',
          type: 'multiple-choice',
          styleGuide: 'cms',
          region: 'comma-castle',
          difficulty: 'beginner',
          question: 'Which sentence correctly uses a comma with an introductory element in Chicago style?',
          options: [
            'After the meeting we discussed the proposal.',
            'After the meeting, we discussed the proposal.',
            'After, the meeting we discussed the proposal.',
            'After the meeting we discussed, the proposal.'
          ],
          correctAnswer: 'After the meeting, we discussed the proposal.',
          explanation: 'Use a comma after an introductory word, phrase, or clause: "After the meeting, we discussed the proposal."',
          points: 10,
          timeLimit: 30
        },

        // INTERMEDIATE
        {
          id: 'cms-cc-i1',
          type: 'multiple-choice',
          styleGuide: 'cms',
          region: 'comma-castle',
          difficulty: 'intermediate',
          question: 'In Chicago style, how should you punctuate a sentence with a restrictive appositive?',
          options: [
            'My brother, the doctor, lives in Chicago.',
            'My brother the doctor lives in Chicago.',
            'My brother the doctor, lives in Chicago.',
            'My brother; the doctor; lives in Chicago.'
          ],
          correctAnswer: 'My brother the doctor lives in Chicago.',
          explanation: 'Restrictive appositives (essential to meaning) are not set off with commas. If you have multiple brothers, "the doctor" is restrictive (identifies which brother). If you have one brother, use commas.',
          points: 25,
          timeLimit: 40
        },
        {
          id: 'cms-cc-i2',
          type: 'true-false',
          styleGuide: 'cms',
          region: 'comma-castle',
          difficulty: 'intermediate',
          question: 'In Chicago style, use commas to set off transitional adverbs (however, therefore, nevertheless) when they appear mid-sentence.',
          correctAnswer: true,
          explanation: 'True. Transitional adverbs should be set off with commas: "The results, however, were inconclusive." When starting a sentence: "However, the results were inconclusive."',
          points: 25,
          timeLimit: 35
        },
        {
          id: 'cms-cc-i3',
          type: 'multiple-choice',
          styleGuide: 'cms',
          region: 'comma-castle',
          difficulty: 'intermediate',
          question: 'Which sentence correctly uses quotation marks and commas in Chicago style?',
          options: [
            'The article, "Modern History," was published in 2022.',
            'The article "Modern History," was published in 2022.',
            'The article, "Modern History", was published in 2022.',
            'The article "Modern History" was published in 2022.'
          ],
          correctAnswer: 'The article "Modern History" was published in 2022.',
          explanation: 'In Chicago style, do not use a comma before the title when it immediately follows "the article" or similar. Commas go inside quotation marks in American style.',
          points: 25,
          timeLimit: 40
        },
        {
          id: 'cms-cc-i4',
          type: 'multiple-choice',
          styleGuide: 'cms',
          region: 'comma-castle',
          difficulty: 'intermediate',
          question: 'Which sentence correctly uses commas with an appositive in Chicago style?',
          options: [
            'The author Jane Austen wrote Pride and Prejudice.',
            'The author, Jane Austen wrote Pride and Prejudice.',
            'The author Jane Austen, wrote Pride and Prejudice.',
            'The author, Jane Austen, wrote Pride and Prejudice.'
          ],
          correctAnswer: 'The author, Jane Austen, wrote Pride and Prejudice.',
          explanation: 'Nonrestrictive appositives (providing additional, nonessential information) should be set off with commas on both sides: "The author, Jane Austen, wrote Pride and Prejudice."',
          points: 25,
          timeLimit: 35
        },
        {
          id: 'cms-cc-i5',
          type: 'true-false',
          styleGuide: 'cms',
          region: 'comma-castle',
          difficulty: 'intermediate',
          question: 'In Chicago style, use a comma after state names when they appear in text with city names.',
          correctAnswer: true,
          explanation: 'True. When a city and state appear together in text, use commas around the state: "She lives in Austin, Texas, where she works." Also applies to countries with cities.',
          points: 25,
          timeLimit: 30
        },

        // EXPERT
        {
          id: 'cms-cc-e1',
          type: 'multiple-choice',
          styleGuide: 'cms',
          region: 'comma-castle',
          difficulty: 'expert',
          question: 'In Chicago style, how should you punctuate numbers over 999?',
          options: [
            'Use commas: 1,000; 10,000; 100,000',
            'Use spaces: 1 000; 10 000; 100 000',
            'Use periods: 1.000; 10.000; 100.000',
            'No separators: 1000; 10000; 100000'
          ],
          correctAnswer: 'Use commas: 1,000; 10,000; 100,000',
          explanation: 'Chicago style uses commas to separate groups of three digits in numbers over 999: 1,000; 10,000; 100,000. However, page numbers, addresses, and years do not use commas.',
          points: 40,
          timeLimit: 45
        },
        {
          id: 'cms-cc-e2',
          type: 'true-false',
          styleGuide: 'cms',
          region: 'comma-castle',
          difficulty: 'expert',
          question: 'In Chicago style, an em dash (—) should have spaces on both sides.',
          correctAnswer: false,
          explanation: 'False. Chicago style uses em dashes without spaces: "The results—which were surprising—changed everything." Do not confuse with en dashes, which are used for ranges.',
          points: 40,
          timeLimit: 30
        },
        {
          id: 'cms-cc-e3',
          type: 'multiple-choice',
          styleGuide: 'cms',
          region: 'comma-castle',
          difficulty: 'expert',
          question: 'How should you punctuate a compound sentence with a conjunctive adverb in Chicago style?',
          options: [
            'The study was complete; however the results were incomplete.',
            'The study was complete; however, the results were incomplete.',
            'The study was complete, however, the results were incomplete.',
            'The study was complete however, the results were incomplete.'
          ],
          correctAnswer: 'The study was complete; however, the results were incomplete.',
          explanation: 'Use a semicolon before the conjunctive adverb and a comma after it when joining two independent clauses: "clause; however, clause."',
          points: 40,
          timeLimit: 50
        },
        {
          id: 'cms-cc-e4',
          type: 'multiple-choice',
          styleGuide: 'cms',
          region: 'comma-castle',
          difficulty: 'expert',
          question: 'Which sentence correctly uses commas with a complex series containing internal punctuation?',
          options: [
            'The chapters covered Rome, Italy, Paris, France, and London, England.',
            'The chapters covered Rome, Italy; Paris, France; and London, England.',
            'The chapters covered Rome; Italy, Paris; France, and London; England.',
            'The chapters covered: Rome, Italy; Paris, France; and London, England.'
          ],
          correctAnswer: 'The chapters covered Rome, Italy; Paris, France; and London, England.',
          explanation: 'Use semicolons to separate items in a series when the items themselves contain commas. This prevents confusion: "Rome, Italy; Paris, France; and London, England."',
          points: 40,
          timeLimit: 50
        },
        {
          id: 'cms-cc-e5',
          type: 'true-false',
          styleGuide: 'cms',
          region: 'comma-castle',
          difficulty: 'expert',
          question: 'In Chicago style, omit the comma before "Inc." or "Ltd." in company names unless the company itself uses one.',
          correctAnswer: true,
          explanation: 'True. Chicago style recommends following the company\'s own usage. Many companies omit the comma: "Apple Inc." However, if the company uses a comma, include it: "Company Name, Inc."',
          points: 40,
          timeLimit: 35
        }
      ],

      'cms-city': [
        // BEGINNER
        {
          id: 'cms-cy-b1',
          type: 'multiple-choice',
          styleGuide: 'cms',
          region: 'cms-city',
          difficulty: 'beginner',
          question: 'How should you capitalize a title in Chicago headline style?',
          options: [
            'The Story Of A Young Writer',
            'The Story of a Young Writer',
            'The story of a young writer',
            'THE STORY OF A YOUNG WRITER'
          ],
          correctAnswer: 'The Story of a Young Writer',
          explanation: 'In Chicago headline style, capitalize the first and last words and all major words. Do not capitalize articles (a, an, the), coordinating conjunctions, or prepositions unless they are the first or last word.',
          points: 15,
          timeLimit: 40
        },
        {
          id: 'cms-cy-b2',
          type: 'multiple-choice',
          styleGuide: 'cms',
          region: 'cms-city',
          difficulty: 'beginner',
          question: 'How should you format a book in a Chicago-style bibliography?',
          options: [
            'Author. Title. Place: Publisher, Year.',
            'Author, Title (Place: Publisher, Year).',
            'Author. Title. Publisher, Year.',
            'Author Last, First. Title. Place: Publisher, Year.'
          ],
          correctAnswer: 'Author Last, First. Title. Place: Publisher, Year.',
          explanation: 'Chicago bibliography format: Last name, First name. Title. Place of publication: Publisher, Year.',
          points: 15,
          timeLimit: 40
        },
        {
          id: 'cms-cy-b3',
          type: 'true-false',
          styleGuide: 'cms',
          region: 'cms-city',
          difficulty: 'beginner',
          question: 'In Chicago style, book titles should be italicized.',
          correctAnswer: true,
          explanation: 'True. Book titles are italicized in Chicago style, whether in notes, bibliography, or text.',
          points: 10,
          timeLimit: 20
        },

        // INTERMEDIATE
        {
          id: 'cms-cy-i1',
          type: 'multiple-choice',
          styleGuide: 'cms',
          region: 'cms-city',
          difficulty: 'intermediate',
          question: 'Which is the correct Chicago-style footnote for a book (first reference)?',
          options: [
            'John Smith, The Great Novel (New York: Penguin, 2020), 45.',
            'Smith, John. The Great Novel. New York: Penguin, 2020. p. 45.',
            'John Smith, The Great Novel, New York: Penguin, 2020, 45.',
            'Smith, The Great Novel (Penguin, 2020), 45.'
          ],
          correctAnswer: 'John Smith, The Great Novel (New York: Penguin, 2020), 45.',
          explanation: 'First footnote: Author name in normal order, Title in italics (Place: Publisher, Year), page number. Note the comma after author and the parentheses around publication info.',
          points: 30,
          timeLimit: 50
        },
        {
          id: 'cms-cy-i2',
          type: 'multiple-choice',
          styleGuide: 'cms',
          region: 'cms-city',
          difficulty: 'intermediate',
          question: 'How should numbers be styled in Chicago style for general text?',
          options: [
            'Spell out numbers one through nine; use numerals for 10 and above.',
            'Spell out numbers one through ninety-nine; use numerals for 100 and above.',
            'Always use numerals for all numbers.',
            'Spell out all numbers under 100.'
          ],
          correctAnswer: 'Spell out numbers one through ninety-nine; use numerals for 100 and above.',
          explanation: 'Chicago style (in humanities contexts) recommends spelling out whole numbers from one through ninety-nine, and using numerals for 100 and above.',
          points: 30,
          timeLimit: 40
        },

        // EXPERT
        {
          id: 'cms-cy-e1',
          type: 'multiple-choice',
          styleGuide: 'cms',
          region: 'cms-city',
          difficulty: 'expert',
          question: 'Which is correct for a shortened footnote after the first full citation?',
          options: [
            'Smith, The Great Novel, 45.',
            'Smith, Great Novel, 45.',
            'Ibid., 45.',
            'Smith, 45.'
          ],
          correctAnswer: 'Smith, The Great Novel, 45.',
          explanation: 'Chicago 17th edition discourages "ibid." Shortened notes include: Author Last Name, Shortened Title, page. Keep enough of the title to identify the work.',
          points: 50,
          timeLimit: 60
        }
      ]
    }
  };

  /**
   * Get all questions for a specific style guide
   */
  function getByStyleGuide(guide) {
    return questions[guide] || {};
  }

  /**
   * Get questions for a specific region
   */
  function getByRegion(guide, region) {
    return questions[guide]?.[region] || [];
  }

  /**
   * Get questions filtered by difficulty
   */
  function getByDifficulty(guide, region, difficulty) {
    const regionQuestions = getByRegion(guide, region);
    return regionQuestions.filter(q => q.difficulty === difficulty);
  }

  /**
   * Get a specific question by ID
   */
  function getById(id) {
    for (const guide in questions) {
      for (const region in questions[guide]) {
        const question = questions[guide][region].find(q => q.id === id);
        if (question) return question;
      }
    }
    return null;
  }

  /**
   * Get random questions
   */
  function getRandom(guide, region, count = 5) {
    const regionQuestions = getByRegion(guide, region);
    const shuffled = [...regionQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  /**
   * Get all questions
   */
  function getAll() {
    return questions;
  }

  // Public API
  return {
    getAll,
    getByStyleGuide,
    getByRegion,
    getByDifficulty,
    getById,
    getRandom
  };
})();

// Export for ES6 modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QuestionBank;
}
