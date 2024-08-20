var sigInst, canvas, $GP

var colors = { 'FinLLM': [56, 255, 205],
               'AiFin': [255, 226, 56],
               'AISRF': [190, 255, 56],
               'MuFin (Component 6)': [255, 56, 232],
               'AI4FCF (Component 7)': [255, 132, 56],
               'AIFS-Bridge': [221, 255, 56],
               'MLECON (Component 10)': [216, 56, 255],
               'Benchmarks': [158, 255, 56],
               'FinNLP': [56, 211, 255],
               'WomenAIFin': [255, 56, 137],
               'AIAfrica': [255, 163, 56],
               'AI-FinSi': [252, 255, 56],
               'FNP': [56, 148, 255],
               'MAL': [153, 56, 255],
               'XAIFIN': [255, 56, 74],
               'FinRec (Component 1)': [56, 255, 237],
               'Fin-RecSys': [90, 56, 255],
               'DSMM (Component 4)': [95, 255, 56],
               'GLIndA': [56, 255, 142],
               'ADF': [255, 69, 56],
               'SynFin': [255, 56, 169],
               'MIDAS (Component 9)': [184, 56, 255],             
               'MLF': [255, 100, 56],
               'KDF': [56, 85, 159],
               'FAIF': [64, 255, 56],
               'FinIR (Component 3)': [56, 255, 174],
               'MLInv': [121, 56, 255],
               'ML-ESG': [247, 56, 255],   
               'DMF': [127, 255, 56],
               'ECONLP': [56, 242, 255],
               'RobustFin': [59, 56, 214],
               'RAIFS': [56, 255, 111],
               'Muffin': [56, 116, 255],
               'FinWeb': [56, 179, 255],
               'WFS': [255, 56, 106],
               'AIFI-Bridge (Component 8)': [255, 195, 56],
               'FEAP-AI4Fin': [56, 255, 79],
               'NLP-NA-Finance': [255, 56, 200],
               'FNP+FinNLP': [56, 179, 255],
               'FinNLP+Muffin': [56, 147, 255],
               'Benchmarks+WomenAIFin': [206, 155, 96],
               'AIFS-Bridge+AiFin': [238, 240, 56],
               'FAIF+FEAP-AI4Fin': [60, 255, 67],
               'AIAfrica+SynFin': [255, 127, 93],
               'Fin-RecSys+MLInv': [105, 56, 255],
               'KDF+RobustFin': [57, 70, 186], 
               'FEAP-AI4Fin+RAIFS': [56, 255, 95],
               'AI-FinSi+WomenAIFin': [253, 155, 96],
               'AIFS-Bridge+WomenAIFin': [238, 155, 96],
               'AISRF+WFS': [222, 155, 81],
               'FAIF+MLInv': [92, 155, 155],
               'DMF+FinLLM (Component 5)': [91, 255, 130],
               'FinNLP+Muffin+XAIFIN': [105, 124, 209],
               'ECONLP+FinNLP+KDF': [56, 155, 207],
               'FAIF+GLIndA+WFS': [125, 188, 101],
               'AISRF+GLIndA+WFS': [167, 188, 101],
               'ADF+MLF+RAIFS': [230, 111, 62],
               'FAIF+FEAP-AI4Fin+RAIFS': [58, 255, 82],
               'AIFS-Bridge+ML-ESG+NLP-NA-Finance': [246, 95, 182],
               'ADF+MLF+NLP-NA-Finance': [255, 89, 76],
               'FEAP-AI4Fin+KDF+RobustFin': [56, 108, 154],
               'ECONLP+FinNLP+KDF+Muffin': [56, 179, 239],
               'AI-FinSi+AIFS-Bridge+MAL+SynFin': [220, 155, 134],
               'AIFS-Bridge+FAIF+GLIndA+WFS': [149, 205, 90],
               'ECONLP+FinNLP+KDF+RobustFin': [56, 127, 200],
               'AIFS-Bridge+FEAP-AI4Fin+GLIndA+KDF+RAIFS': [83, 198, 117],
               'ECONLP+FNP+FinNLP+FinWeb+KDF+Muffin': [56, 190, 249],
               'AI-FinSi+Benchmarks+Fin-RecSys+ML-ESG+MLInv+NLP-NA-Finance': [187, 105, 191],
               'AIAfrica+ECONLP+FinNLP+KDF+RobustFin+WomenAIFin': [131, 132, 161],
               'AISRF+FAIF+GLIndA+MLF+RAIFS+WFS': [146, 196, 87],
               'ECONLP+FinNLP+GLIndA+KDF+RobustFin+WFS+WomenAIFin': [96, 121, 174],
               'ADF+AISRF+FAIF+FEAP-AI4Fin+GLIndA+MAL+MLF+NLP-NA-Finance+RAIFS+WFS': [191, 138, 93],
               'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)': [155, 147, 149]}

var all_ws = {'ADF': ['ADF', 'ADF+MLF+RAIFS', 'ADF+MLF+NLP-NA-Finance', 'ADF+AISRF+FAIF+FEAP-AI4Fin+GLIndA+MAL+MLF+NLP-NA-Finance+RAIFS+WFS', 'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'MLF': ['MLF', 'ADF+MLF+RAIFS', 'ADF+MLF+NLP-NA-Finance', 'AISRF+FAIF+GLIndA+MLF+RAIFS+WFS', 'ADF+AISRF+FAIF+FEAP-AI4Fin+GLIndA+MAL+MLF+NLP-NA-Finance+RAIFS+WFS', 'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'AI4FCF': ['AI4FCF (Component 7)'],
              'AIAfrica': ['AIAfrica', 'AIAfrica+ECONLP+FinNLP+KDF+RobustFin+WomenAIFin', 'AIAfrica+SynFin', 'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'AIFI-Bridge': ['AIFI-Bridge (Component 8)'],
              'AiFin': ['AiFin', 'AIFS-Bridge+AiFin', 'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'AI-FinSi': ['AI-FinSi+Benchmarks+Fin-RecSys+ML-ESG+MLInv+NLP-NA-Finance', 'AI-FinSi', 'AI-FinSi+WomenAIFin', 'AI-FinSi+AIFS-Bridge+MAL+SynFin', 'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'AIFS-Bridge': ['AIFS-Bridge+FAIF+GLIndA+WFS', 'AIFS-Bridge', 'AIFS-Bridge+AiFin', 'AIFS-Bridge+FEAP-AI4Fin+GLIndA+KDF+RAIFS', 'AIFS-Bridge+ML-ESG+NLP-NA-Finance', 'AI-FinSi+AIFS-Bridge+MAL+SynFin', 'AIFS-Bridge+WomenAIFin', 'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'AISRF': ['AISRF', 'AISRF+GLIndA+WFS', 'AISRF+WFS', 'AISRF+FAIF+GLIndA+MLF+RAIFS+WFS', 'ADF+AISRF+FAIF+FEAP-AI4Fin+GLIndA+MAL+MLF+NLP-NA-Finance+RAIFS+WFS', 'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'Benchmarks': ['Benchmarks', 'AI-FinSi+Benchmarks+Fin-RecSys+ML-ESG+MLInv+NLP-NA-Finance', 'Benchmarks+WomenAIFin', 'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'DMF': ['DMF', 'DMF+FinLLM (Component 5)'],
              'DSMM': ['DSMM (Component 4)'],
              'FAIF': ['AIFS-Bridge+FAIF+GLIndA+WFS', 'FAIF+FEAP-AI4Fin', 'FAIF+GLIndA+WFS', 'FAIF', 'FAIF+FEAP-AI4Fin+RAIFS', 'FAIF+MLInv', 'AISRF+FAIF+GLIndA+MLF+RAIFS+WFS', 'ADF+AISRF+FAIF+FEAP-AI4Fin+GLIndA+MAL+MLF+NLP-NA-Finance+RAIFS+WFS', 'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'FEAP-AI4Fin': ['FAIF+FEAP-AI4Fin', 'FEAP-AI4Fin', 'AIFS-Bridge+FEAP-AI4Fin+GLIndA+KDF+RAIFS', 'FAIF+FEAP-AI4Fin+RAIFS', 'FEAP-AI4Fin+RAIFS', 'FEAP-AI4Fin+KDF+RobustFin', 'ADF+AISRF+FAIF+FEAP-AI4Fin+GLIndA+MAL+MLF+NLP-NA-Finance+RAIFS+WFS', 'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'RAIFS': ['AIFS-Bridge+FEAP-AI4Fin+GLIndA+KDF+RAIFS', 'ADF+MLF+RAIFS', 'FAIF+FEAP-AI4Fin+RAIFS', 'FEAP-AI4Fin+RAIFS', 'RAIFS', 'AISRF+FAIF+GLIndA+MLF+RAIFS+WFS', 'ADF+AISRF+FAIF+FEAP-AI4Fin+GLIndA+MAL+MLF+NLP-NA-Finance+RAIFS+WFS', 'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'GLIndA': ['AIFS-Bridge+FAIF+GLIndA+WFS', 'FAIF+GLIndA+WFS', 'GLIndA', 'AIFS-Bridge+FEAP-AI4Fin+GLIndA+KDF+RAIFS', 'AISRF+GLIndA+WFS', 'ECONLP+FinNLP+GLIndA+KDF+RobustFin+WFS+WomenAIFin', 'AISRF+FAIF+GLIndA+MLF+RAIFS+WFS', 
'ADF+AISRF+FAIF+FEAP-AI4Fin+GLIndA+MAL+MLF+NLP-NA-Finance+RAIFS+WFS', 'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'FinIR': ['FinIR (Component 3)'],
              'FinLLM': ['FinLLM', 'DMF+FinLLM (Component 5)'],
              'FinRec': ['FinRec (Component 1)'],
              'ECONLP': ['ECONLP+FinNLP+KDF', 'ECONLP+FinNLP+KDF+RobustFin', 'ECONLP+FNP+FinNLP+FinWeb+KDF+Muffin', 'AIAfrica+ECONLP+FinNLP+KDF+RobustFin+WomenAIFin', 'ECONLP+FinNLP+KDF+Muffin', 'ECONLP', 'ECONLP+FinNLP+GLIndA+KDF+RobustFin+WFS+WomenAIFin', 'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'FinNLP': ['FinNLP', 'FinNLP+Muffin+XAIFIN', 'ECONLP+FinNLP+KDF', 'ECONLP+FinNLP+KDF+RobustFin', 'FNP+FinNLP', 'ECONLP+FNP+FinNLP+FinWeb+KDF+Muffin', 'FinNLP+Muffin', 'AIAfrica+ECONLP+FinNLP+KDF+RobustFin+WomenAIFin', 'ECONLP+FinNLP+KDF+Muffin', 'ECONLP+FinNLP+GLIndA+KDF+RobustFin+WFS+WomenAIFin', 'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'FinWeb': ['ECONLP+FNP+FinNLP+FinWeb+KDF+Muffin', 'FinWeb', 'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'FNP': ['FNP+FinNLP', 'ECONLP+FNP+FinNLP+FinWeb+KDF+Muffin', 'FNP', 'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'Muffin': ['FinNLP+Muffin+XAIFIN', 'ECONLP+FNP+FinNLP+FinWeb+KDF+Muffin', 'FinNLP+Muffin', 'ECONLP+FinNLP+KDF+Muffin', 'Muffin', 'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'KDF': ['ECONLP+FinNLP+KDF', 'ECONLP+FinNLP+KDF+RobustFin', 'ECONLP+FNP+FinNLP+FinWeb+KDF+Muffin', 'AIAfrica+ECONLP+FinNLP+KDF+RobustFin+WomenAIFin', 'KDF+RobustFin', 'KDF', 'AIFS-Bridge+FEAP-AI4Fin+GLIndA+KDF+RAIFS', 'ECONLP+FinNLP+KDF+Muffin', 'ECONLP+FinNLP+GLIndA+KDF+RobustFin+WFS+WomenAIFin', 'FEAP-AI4Fin+KDF+RobustFin', 'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'RobustFin': ['ECONLP+FinNLP+KDF+RobustFin', 'AIAfrica+ECONLP+FinNLP+KDF+RobustFin+WomenAIFin', 'KDF+RobustFin', 'ECONLP+FinNLP+GLIndA+KDF+RobustFin+WFS+WomenAIFin', 'FEAP-AI4Fin+KDF+RobustFin', 'RobustFin', 'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'Fin-RecSys': ['AI-FinSi+Benchmarks+Fin-RecSys+ML-ESG+MLInv+NLP-NA-Finance', 'Fin-RecSys', 'Fin-RecSys+MLInv', 'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'MLInv': ['AI-FinSi+Benchmarks+Fin-RecSys+ML-ESG+MLInv+NLP-NA-Finance', 'Fin-RecSys+MLInv', 'MLInv', 'FAIF+MLInv', 'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'MAL': ['MAL', 'AI-FinSi+AIFS-Bridge+MAL+SynFin', 'ADF+AISRF+FAIF+FEAP-AI4Fin+GLIndA+MAL+MLF+NLP-NA-Finance+RAIFS+WFS', 'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'MIDAS': ['MIDAS (Component 9)'],
              'MLECON': ['MLECON (Component 10)'],
              'ML-ESG': ['AI-FinSi+Benchmarks+Fin-RecSys+ML-ESG+MLInv+NLP-NA-Finance', 'ML-ESG', 'AIFS-Bridge+ML-ESG+NLP-NA-Finance',  'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'MuFin': ['MuFin (Component 6)'],
              'NLP-NA-Finance': ['AI-FinSi+Benchmarks+Fin-RecSys+ML-ESG+MLInv+NLP-NA-Finance', 'NLP-NA-Finance', 'AIFS-Bridge+ML-ESG+NLP-NA-Finance', 'ADF+MLF+NLP-NA-Finance',  'ADF+AISRF+FAIF+FEAP-AI4Fin+GLIndA+MAL+MLF+NLP-NA-Finance+RAIFS+WFS', 'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'SynFin': ['SynFin', 'AIAfrica+SynFin', 'AI-FinSi+AIFS-Bridge+MAL+SynFin',  'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'WomenAIFin': ['WomenAIFin', 'Benchmarks+WomenAIFin', 'AIAfrica+ECONLP+FinNLP+KDF+RobustFin+WomenAIFin', 'AI-FinSi+WomenAIFin', 'ECONLP+FinNLP+GLIndA+KDF+RobustFin+WFS+WomenAIFin', 'AIFS-Bridge+WomenAIFin',   'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'WFS': ['AIFS-Bridge+FAIF+GLIndA+WFS', 'FAIF+GLIndA+WFS', 'AISRF+GLIndA+WFS', 'ECONLP+FinNLP+GLIndA+KDF+RobustFin+WFS+WomenAIFin', 'AISRF+WFS', 'AISRF+FAIF+GLIndA+MLF+RAIFS+WFS',  'ADF+AISRF+FAIF+FEAP-AI4Fin+GLIndA+MAL+MLF+NLP-NA-Finance+RAIFS+WFS', 'WFS',  'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)'],
              'XAIFIN': ['FinNLP+Muffin+XAIFIN', 'XAIFIN',  'ADF+AI-FinSi+AIAfrica+AIFS-Bridge+AISRF+AiFin+Benchmarks+ECONLP+FAIF+FEAP-AI4Fin+FNP+Fin-RecSys+FinNLP+FinWeb+GLIndA+KDF+MAL+ML-ESG+MLF+MLInv+Muffin+NLP-NA-Finance+RAIFS+RobustFin+SynFin+WFS+WomenAIFin+XAIFIN (Component 2)']}

var color_to_cluster={}

//Load configuration file
var config={};

//For debug allow a config=file.json parameter to specify the config
function GetQueryStringParams(sParam,defaultVal) {
    var sPageURL = ""+window.location;//.search.substring(1);//This might be causing error in Safari?
    if (sPageURL.indexOf("?")==-1) return defaultVal;
    sPageURL=sPageURL.substr(sPageURL.indexOf("?")+1);    
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
    return defaultVal;
}


jQuery.getJSON(GetQueryStringParams("config","config.json"), function(data, textStatus, jqXHR) {
	config=data;
	
	if (config.type!="network") {
		//bad config
		alert("Invalid configuration settings.")
		return;
	}
	
	//As soon as page is ready (and data ready) set up it
	$(document).ready(setupGUI(config));
});//End JSON Config load


// FUNCTION DECLARATIONS

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function initSigma(config) {
	var data=config.data
	
	var drawProps, graphProps,mouseProps;
	if (config.sigma && config.sigma.drawingProperties) 
		drawProps=config.sigma.drawingProperties;
	else
		drawProps={
        defaultLabelColor: "#000",
        defaultLabelSize: 14,
        defaultLabelBGColor: "#ddd",
        defaultHoverLabelBGColor: "#002147",
        defaultLabelHoverColor: "#fff",
        labelThreshold: 10,
        defaultEdgeType: "curve",
        hoverFontStyle: "bold",
        fontStyle: "bold",
        activeFontStyle: "bold"
    };
    
    if (config.sigma && config.sigma.graphProperties)	
    	graphProps=config.sigma.graphProperties;
    else
    	graphProps={
        minNodeSize: 0,
        maxNodeSize: 7,
        minEdgeSize: 0.2,
        maxEdgeSize: 0.5
    	};
	
	if (config.sigma && config.sigma.mouseProperties) 
		mouseProps=config.sigma.mouseProperties;
	else
		mouseProps={
        minRatio: 0.75, // How far can we zoom out?
        maxRatio: 20, // How far can we zoom in?
    	};
	
    var a = sigma.init(document.getElementById("sigma-canvas")).drawingProperties(drawProps).graphProperties(graphProps).mouseProperties(mouseProps);
    sigInst = a;
    a.active = !1;
    a.neighbors = {};
    a.detail = !1;

    for(let c in colors)
    {
        color = "rgb("+colors[c][0]+","+colors[c][1]+","+colors[c][2]+")"
        color_to_cluster[color] = c
    }


    dataReady = function() {//This is called as soon as data is loaded
		a.clusters = {};

		a.iterNodes(
			function (b) { //This is where we populate the array used for the group select box

                
                if("workshops" in b.attr.attributes)
                {
                    clusters = new Set()
                    ws = b.attr.attributes["workshops"]
                    ws = ws.slice(1,-1)
                    wslist = ws.split(", ")
                    for(let index = 0; index < wslist.length; ++index)
                    {
                        workshop = wslist[index]

                        for(let comb in all_ws)
                        {
                            if(workshop.includes(comb))
                            {
                                combs = all_ws[comb]
                                for(let comb_index = 0; comb_index < combs.length; ++comb_index)
                                {
                                    c = combs[comb_index]
                                    console.log(c)
                                    color = "rgb("+colors[c][0]+","+colors[c][1]+","+colors[c][2]+")"
                                    if(clusters.has(color) == false)
                                    {
                                        clusters.add(color)
                                        
                                        a.clusters[color] || (a.clusters[color] = [])
                                        a.clusters[color].push(b.id)
                                    }
                                }
                            }
                        }
                    }
                }
				// note: index may not be consistent for all nodes. Should calculate each time. 
				 // alert(JSON.stringify(b.attr.attributes[5].val));
				// alert(b.x);
			}
		
		);
	
		a.bind("upnodes", function (a) {
		    nodeActive(a.content[0])
		});

		a.draw();
		configSigmaElements(config);
	}

    if (data.indexOf("gexf")>0 || data.indexOf("xml")>0)
        a.parseGexf(data,dataReady);
    else
	    a.parseJson(data,dataReady);
    gexf = sigmaInst = null;
}


function setupGUI(config) {
	// Initialise main interface elements
	var logo=""; // Logo elements
	if (config.logo.file) {

		logo = "<img src=\"" + config.logo.file +"\"";
		if (config.logo.text) logo+=" alt=\"" + config.logo.text + "\"";
		logo+=">";
	} else if (config.logo.text) {
		logo="<h1>"+config.logo.text+"</h1>";
	}
	if (config.logo.link) logo="<a href=\"" + config.logo.link + "\">"+logo+"</a>";
	$("#maintitle").html(logo);

	// #title
	$("#title").html("<h2>"+config.text.title+"</h2>");

	// #titletext
	$("#titletext").html(config.text.intro);

	// More information
	if (config.text.more) {
		$("#information").html(config.text.more);
	} else {
		//hide more information link
		$("#moreinformation").hide();
	}

	// Legend

	// Node
	if (config.legend.nodeLabel) {
		$(".node").next().html(config.legend.nodeLabel);
	} else {
		//hide more information link
		$(".node").hide();
	}
	// Edge
	if (config.legend.edgeLabel) {
		$(".edge").next().html(config.legend.edgeLabel);
	} else {
		//hide more information link
		$(".edge").hide();
	}
	// Colours
	if (config.legend.nodeLabel) {
		$(".colours").next().html(config.legend.colorLabel);
	} else {
		//hide more information link
		$(".colours").hide();
	}

	$GP = {
		calculating: !1,
		showgroup: !1
	};
    $GP.intro = $("#intro");
    $GP.minifier = $GP.intro.find("#minifier");
    $GP.mini = $("#minify");
    $GP.info = $("#attributepane");
    $GP.info_donnees = $GP.info.find(".nodeattributes");
    $GP.info_name = $GP.info.find(".name");
    $GP.info_link = $GP.info.find(".link");
    $GP.info_data = $GP.info.find(".data");
    $GP.info_close = $GP.info.find(".returntext");
    $GP.info_close2 = $GP.info.find(".close");
    $GP.info_p = $GP.info.find(".p");
    $GP.info_close.click(nodeNormal);
    $GP.info_close2.click(nodeNormal);
    $GP.form = $("#mainpanel").find("form");
    $GP.search = new Search($GP.form.find("#search"));
    if (!config.features.search) {
		$("#search").hide();
	}
	if (!config.features.groupSelectorAttribute) {
		$("#attributeselect").hide();
	}
    $GP.cluster = new Cluster($GP.form.find("#attributeselect"));
    config.GP=$GP;
    initSigma(config);
}

function configSigmaElements(config) {
	$GP=config.GP;
    
    // Node hover behaviour
    if (config.features.hoverBehavior == "dim") {

		var greyColor = '#ccc';
		sigInst.bind('overnodes',function(event){
		var nodes = event.content;
		var neighbors = {};
		sigInst.iterEdges(function(e){
		if(nodes.indexOf(e.source)<0 && nodes.indexOf(e.target)<0){
			if(!e.attr['grey']){
				e.attr['true_color'] = e.color;
				e.color = greyColor;
				e.attr['grey'] = 1;
			}
		}else{
			e.color = e.attr['grey'] ? e.attr['true_color'] : e.color;
			e.attr['grey'] = 0;

			neighbors[e.source] = 1;
			neighbors[e.target] = 1;
		}
		}).iterNodes(function(n){
			if(!neighbors[n.id]){
				if(!n.attr['grey']){
					n.attr['true_color'] = n.color;
					n.color = greyColor;
					n.attr['grey'] = 1;
				}
			}else{
				n.color = n.attr['grey'] ? n.attr['true_color'] : n.color;
				n.attr['grey'] = 0;
			}
		}).draw(2,2,2);
		}).bind('outnodes',function(){
		sigInst.iterEdges(function(e){
			e.color = e.attr['grey'] ? e.attr['true_color'] : e.color;
			e.attr['grey'] = 0;
		}).iterNodes(function(n){
			n.color = n.attr['grey'] ? n.attr['true_color'] : n.color;
			n.attr['grey'] = 0;
		}).draw(2,2,2);
		});

    } else if (config.features.hoverBehavior == "hide") {

		sigInst.bind('overnodes',function(event){
			var nodes = event.content;
			var neighbors = {};
		sigInst.iterEdges(function(e){
			if(nodes.indexOf(e.source)>=0 || nodes.indexOf(e.target)>=0){
		    	neighbors[e.source] = 1;
		    	neighbors[e.target] = 1;
		  	}
		}).iterNodes(function(n){
		  	if(!neighbors[n.id]){
		    	n.hidden = 1;
		  	}else{
		    	n.hidden = 0;
		  }
		}).draw(2,2,2);
		}).bind('outnodes',function(){
		sigInst.iterEdges(function(e){
		  	e.hidden = 0;
		}).iterNodes(function(n){
		  	n.hidden = 0;
		}).draw(2,2,2);
		});

    }
    $GP.bg = $(sigInst._core.domElements.bg);
    $GP.bg2 = $(sigInst._core.domElements.bg2);

    

    var a = [],
        b,x=1;

        aux_clusters = []
        for(b in sigInst.clusters)
            aux_clusters.push(b)

        aux_clusters = aux_clusters.sort(function(c1,c2)
        {
            //return c1.localeCompare(c2)
            value = sigInst.clusters[c1].length - sigInst.clusters[c2].length
            if(value == 0)
                return color_to_cluster[c1].localeCompare(color_to_cluster[c2])
            return value
        })

		for (i = 0; i < aux_clusters.length; ++i) 
        {
            b = aux_clusters[i]
            a.push('<div style="line-height:12px"><a href="#' + b + '"><div style="width:40px;height:12px;border:1px solid #fff;background:' + b + ';display:inline-block"></div> ' + (color_to_cluster[b]) + ' (' + sigInst.clusters[b].length + ' members)</a></div>');
        }
    //a.sort();
    $GP.cluster.content(a.join(""));
    b = {
        minWidth: 400,
        maxWidth: 800,
        maxHeight: 600
    };//        minHeight: 300,
    $("a.fb").fancybox(b);
    $("#zoom").find("div.z").each(function () {
        var a = $(this),
            b = a.attr("rel");
        a.click(function () {
			if (b == "center") {
				sigInst.position(0,0,1).draw();
			} else {
		        var a = sigInst._core;
	            sigInst.zoomTo(a.domElements.nodes.width / 2, a.domElements.nodes.height / 2, a.mousecaptor.ratio * ("in" == b ? 1.5 : 0.5));		
			}

        })
    });
    $GP.mini.click(function () {
        $GP.mini.hide();
        $GP.intro.show();
        $GP.minifier.show()
    });
    $GP.minifier.click(function () {
        $GP.intro.hide();
        $GP.minifier.hide();
        $GP.mini.show()
    });
    $GP.intro.find("#showGroups").click(function () {
        !0 == $GP.showgroup ? showGroups(!1) : showGroups(!0)
    });
    a = window.location.hash.substr(1);
    if (0 < a.length) switch (a) {
    case "Groups":
        showGroups(!0);
        break;
    case "information":
        $.fancybox.open($("#information"), b);
        break;
    default:
        $GP.search.exactMatch = !0, $GP.search.search(a)
		$GP.search.clean();
    }

}

function Search(a) {
    this.input = a.find("input[name=search]");
    this.state = a.find(".state");
    this.results = a.find(".results");
    this.exactMatch = !1;
    this.lastSearch = "";
    this.searching = !1;
    var b = this;
    this.input.focus(function () {
        var a = $(this);
        a.data("focus") || (a.data("focus", !0), a.removeClass("empty"));
        b.clean()
    });
    this.input.keydown(function (a) {
        if (13 == a.which) return b.state.addClass("searching"), b.search(b.input.val()), !1
    });
    this.state.click(function () {
        var a = b.input.val();
        b.searching && a == b.lastSearch ? b.close() : (b.state.addClass("searching"), b.search(a))
    });
    this.dom = a;
    this.close = function () {
        this.state.removeClass("searching");
        this.results.hide();
        this.searching = !1;
        this.input.val("");//SAH -- let's erase string when we close
        nodeNormal()
    };
    this.clean = function () {
        this.results.empty().hide();
        this.state.removeClass("searching");
        this.input.val("");
    };
    this.search = function (a) {
        var b = !1,
            c = [],
            b = this.exactMatch ? ("^" + a + "$").toLowerCase() : a.toLowerCase(),
            g = RegExp(b);
        this.exactMatch = !1;
        this.searching = !0;
        this.lastSearch = a;
        this.results.empty();
        if (2 >= a.length) this.results.html("<i>You must search for a name with a minimum of 3 letters.</i>");
        else {
            sigInst.iterNodes(function (a) {

                if("institution" in a.attr.attributes && "workshops" in a.attr.attributes)
                {
                    g.test(a.label.toLowerCase()) && c.push({
                        id: a.id,
                        name: a.label
                    })

                    g.test(a.attr.attributes["workshops"].toLowerCase()) && c.push({
                        id: a.id,
                        name: a.label
                    })
                }
            });

            if (c.length == 1) (b = !0, nodeActive(c[0].id))
            a = ["<b>Search Results: </b>"];
            if (1 < c.length) for (var d = 0, h = c.length; d < h; d++) a.push('<a href="#' + c[d].name + '" onclick="nodeActive(\'' + c[d].id + "')\">" + c[d].name + "</a>");
            0 == c.length && !b && a.push("<i>No results found.</i>");
            1 < a.length && this.results.html(a.join(""));
           }
        if(c.length!=1) this.results.show();
        if(c.length==1) this.results.hide();   
    }
}

function Cluster(a) {
    this.cluster = a;
    this.display = !1;
    this.list = this.cluster.find(".list");
    this.list.empty();
    this.select = this.cluster.find(".select");
    this.select.click(function () {
        $GP.cluster.toggle()
    });
    this.toggle = function () {
        this.display ? this.hide() : this.show()
    };
    this.content = function (a) {
        this.list.html(a);
        this.list.find("a").click(function () {
            var a = $(this).attr("href").substr(1);
            showCluster(a)
        })
    };
    this.hide = function () {
        this.display = !1;
        this.list.hide();
        this.select.removeClass("close")
    };
    this.show = function () {
        this.display = !0;
        this.list.show();
        this.select.addClass("close")
    }
}
function showGroups(a) {
    a ? ($GP.intro.find("#showGroups").text("Hide groups"), $GP.bg.show(), $GP.bg2.hide(), $GP.showgroup = !0) : ($GP.intro.find("#showGroups").text("View Groups"), $GP.bg.hide(), $GP.bg2.show(), $GP.showgroup = !1)
}

function nodeNormal() {
    !0 != $GP.calculating && !1 != sigInst.detail && (showGroups(!1), $GP.calculating = !0, sigInst.detail = !0, $GP.info.delay(400).animate({width:'hide'},350),$GP.cluster.hide(), sigInst.iterEdges(function (a) {
        a.attr.color = !1;
        a.hidden = !1
    }), sigInst.iterNodes(function (a) {
        a.hidden = !1;
        a.attr.color = !1;
        a.attr.lineWidth = !1;
        a.attr.size = !1
    }), sigInst.draw(2, 2, 2, 2), sigInst.neighbors = {}, sigInst.active = !1, $GP.calculating = !1, window.location.hash = "")
}

function nodeActive(a) {

	var groupByDirection=false;
	if (config.informationPanel.groupByEdgeDirection && config.informationPanel.groupByEdgeDirection==true)	groupByDirection=true;
	
    sigInst.neighbors = {};
    sigInst.detail = !0;
    var b = sigInst._core.graph.nodesIndex[a];
    showGroups(!1);
	var outgoing={},incoming={},mutual={};//SAH
    sigInst.iterEdges(function (b) {
        b.attr.lineWidth = !1;
        b.hidden = !0;
        
        n={
            name: b.label,
            colour: b.color
        };
        
   	   if (a==b.source) outgoing[b.target]=n;		//SAH
	   else if (a==b.target) incoming[b.source]=n;		//SAH
       if (a == b.source || a == b.target) sigInst.neighbors[a == b.target ? b.source : b.target] = n;
       b.hidden = !1, b.attr.color = "rgba(0, 0, 0, 1)";
    });
    var f = [];
    sigInst.iterNodes(function (a) {
        a.hidden = !0;
        a.attr.lineWidth = !1;
        a.attr.color = a.color
    });
    
    if (groupByDirection) {
		//SAH - Compute intersection for mutual and remove these from incoming/outgoing
		for (e in outgoing) {
			//name=outgoing[e];
			if (e in incoming) {
				mutual[e]=outgoing[e];
				delete incoming[e];
				delete outgoing[e];
			}
		}
    }
    
    var createList=function(c) {
        var f = [];
    	var e = [],
      	 	 //c = sigInst.neighbors,
       		 g;
    for (g in c) {
        var d = sigInst._core.graph.nodesIndex[g];
        d.hidden = !1;
        d.attr.lineWidth = !1;
        d.attr.color = c[g].colour;
        a != g && e.push({
            id: g,
            name: d.label,
            group: (c[g].name)? c[g].name:"",
            colour: c[g].colour
        })
    }
    e.sort(function (a, b) {
        var c = a.group.toLowerCase(),
            d = b.group.toLowerCase(),
            e = a.name.toLowerCase(),
            f = b.name.toLowerCase();
        return c != d ? c < d ? -1 : c > d ? 1 : 0 : e < f ? -1 : e > f ? 1 : 0
    });
    d = "";
		for (g in e) {
			c = e[g];
			/*if (c.group != d) {
				d = c.group;
				f.push('<li class="cf" rel="' + c.color + '"><div class=""></div><div class="">' + d + "</div></li>");
			}*/
			f.push('<li class="membership"><a href="#' + c.name + '" onmouseover="sigInst._core.plotter.drawHoverNode(sigInst._core.graph.nodesIndex[\'' + c.id + '\'])\" onclick=\"nodeActive(\'' + c.id + '\')" onmouseout="sigInst.refresh()">' + c.name + "</a></li>");
		}
		return f;
	}
	
	/*console.log("mutual:");
	console.log(mutual);
	console.log("incoming:");
	console.log(incoming);
	console.log("outgoing:");
	console.log(outgoing);*/
	
	
	var f=[];
	
	//console.log("neighbors:");
	//console.log(sigInst.neighbors);

	if (groupByDirection) {
		size=Object.size(mutual);
		f.push("<h2>Mututal (" + size + ")</h2>");
		(size>0)? f=f.concat(createList(mutual)) : f.push("No mutual links<br>");
		size=Object.size(incoming);
		f.push("<h2>Incoming (" + size + ")</h2>");
		(size>0)? f=f.concat(createList(incoming)) : f.push("No incoming links<br>");
		size=Object.size(outgoing);
		f.push("<h2>Outgoing (" + size + ")</h2>");
		(size>0)? f=f.concat(createList(outgoing)) : f.push("No outgoing links<br>");
	} else {
		f=f.concat(createList(sigInst.neighbors));
	}
	//b is object of active node -- SAH
    b.hidden = !1;
    b.attr.color = b.color;
    b.attr.lineWidth = 6;
    b.attr.strokeStyle = "#000000";
    sigInst.draw(2, 2, 2, 2);

    $GP.info_link.find("ul").html(f.join(""));
    $GP.info_link.find("li").each(function () {
        var a = $(this),
            b = a.attr("rel");
    });
    f = b.attr;
    if (f.attributes) {
  		var image_attribute = false;
  		if (config.informationPanel.imageAttribute) {
  			image_attribute=config.informationPanel.imageAttribute;
  		}
        e = [];
        temp_array = [];
        g = 0;
        for (var attr in f.attributes) {
            var d = f.attributes[attr],
                h = "";
			if (attr!=image_attribute) {
                h = '<span><strong>' + attr + ':</strong> ' + d + '</span><br/>'
			}
            //temp_array.push(f.attributes[g].attr);
            e.push(h)
        }

        if (image_attribute) {
        	//image_index = jQuery.inArray(image_attribute, temp_array);
        	$GP.info_name.html("<div><img src=" + f.attributes[image_attribute] + " style=\"vertical-align:middle\" /> <span onmouseover=\"sigInst._core.plotter.drawHoverNode(sigInst._core.graph.nodesIndex['" + b.id + '\'])" onmouseout="sigInst.refresh()">' + b.label + "</span></div>");
        } else {
        	$GP.info_name.html("<div><span onmouseover=\"sigInst._core.plotter.drawHoverNode(sigInst._core.graph.nodesIndex['" + b.id + '\'])" onmouseout="sigInst.refresh()">' + b.label + "</span></div>");
        }
        // Image field for attribute pane
        $GP.info_data.html(e.join("<br/>"))
    }
    $GP.info_data.show();
    $GP.info_p.html("Connections:");
    $GP.info.animate({width:'show'},350);
	$GP.info_donnees.hide();
	$GP.info_donnees.show();
    sigInst.active = a;
    window.location.hash = b.label;
}

function showCluster(a) {
    var b = sigInst.clusters[a];
    if (b && 0 < b.length) {
        showGroups(!1);
        sigInst.detail = !0;
        b.sort();
        sigInst.iterEdges(function (a) {
            a.hidden = !1;
            a.attr.lineWidth = !1;
            a.attr.color = !1
        });
        sigInst.iterNodes(function (a) {
            a.hidden = !0
        });
        for (var f = [], e = [], c = 0, g = b.length; c < g; c++) {
            var d = sigInst._core.graph.nodesIndex[b[c]];
            !0 == d.hidden && (e.push(b[c]), d.hidden = !1, d.attr.lineWidth = !1, d.attr.color = d.color, f.push('<li class="membership"><a href="#'+d.label+'" onmouseover="sigInst._core.plotter.drawHoverNode(sigInst._core.graph.nodesIndex[\'' + d.id + "'])\" onclick=\"nodeActive('" + d.id + '\')" onmouseout="sigInst.refresh()">' + d.label + "</a></li>"))
        }
        sigInst.clusters[a] = e;
        sigInst.draw(2, 2, 2, 2);
        $GP.info_name.html("<b>" + color_to_cluster[a] + "</b>");
        $GP.info_data.hide();
        $GP.info_p.html("Group Members:");
        $GP.info_link.find("ul").html(f.join(""));
        $GP.info.animate({width:'show'},350);
        $GP.search.clean();
		$GP.cluster.hide();
        return !0
    }
    return !1
}


