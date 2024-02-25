# import sys
# import json
# from bert_score import bert_score

# # Read JSON data from stdin
# data = json.loads(sys.stdin.read())
# user_answer = data['user_answer']
# correct_answer = data['correct_answer']

# # Calculate BERT score
# P, R, F1 = bert_score([sys.argv[0]], [sys.argv[1]], lang='en', model_type='bert-base-uncased')
# score = F1.item()

# # Print the score as JSON to stdout
# print(json.dumps({'score': score}))



print("welcome")