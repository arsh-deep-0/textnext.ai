import sys
import json
from bert_score import score as bert_score

score_percentage=0

question = sys.argv[1]
user_answer = sys.argv[2]
correct_answers_Arr = sys.argv[3]
correct_answers= json.loads(correct_answers_Arr)


    

# Calculate BERT score
def calculate_bert_score(user_answer, correct_answer):
    P, R, F1 = bert_score([user_answer], [correct_answer], lang='en', model_type='bert-base-uncased')
    return F1.item()



# Function to check answer
def check_answer(question, user_answer, correct_answers):
    max_total_score = 0
    for correct_answer in correct_answers:
        correct_answer_lines = break_at_full_stop(correct_answer)
        max_score = -1
        for correct_answer_line in correct_answer_lines:
            bertscore_val = calculate_bert_score(user_answer, correct_answer_line)
            total_score = 1 * bertscore_val 
            max_score = max(max_score, total_score)
        max_total_score = max(max_score, max_total_score)
    return max_total_score

# Break text into lines at full stops
def break_at_full_stop(text):
    lines = text.split('.')
    # Remove any empty strings resulting from consecutive full stops
    lines = [line.strip() for line in lines if line.strip()]
    return lines


    


# user_answer_lines = break_at_full_stop(user_answer)
maxscore = 0
import time
start_time = time.time()    
score = check_answer(question, user_answer, correct_answers)
end_time=time.time()
elasped_time = end_time - start_time


score_percentage = int((-25 + 100 * score) / 0.75) 
    
    

# Print the score as JSON to stdout
print(json.dumps({'score': score_percentage,'time':elasped_time}))



# print("welcome")