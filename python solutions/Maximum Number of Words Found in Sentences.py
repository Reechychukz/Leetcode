class Solution:
    def mostWordsFound(self, sentences: List[str]) -> int:
        max = 0
        for sentence in sentences:
            number_of_words = len(sentence.split(' '))
            if number_of_words > max:
                max = number_of_words           
        return max
