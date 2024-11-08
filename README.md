# BBallComp

Frontend Angular
Backend Node.Js
Database PostgresSQL

Fully Hosted on AWS utilizing S3 for static website, API Gateway Request/Resposne transformation, Lambda for resolving DB calls, RDS for cloud hosted PostgresSQL database

BBallComp project is to analyze NBA statistics and gain insights into players and teams based on comparisons, compisitions, and compensation.

# Comparison
Utilizing KNN Classifier, finds the 5 most similar players based on set of statistics.
Example :
Players most similar to Jordan Poole:
    Similar Player  Distance Team Position
100   Bradley Beal  1.085109  PHO       SG
52   Devin Vassell  1.137063  SAS       SG
33   Collin Sexton  1.218015  UTA       SG
63    Terry Rozier  1.242393  MIA       SG
215    Zach LaVine  1.270654  CHI       SG


# Composition (TBD)
The goal is to be able to understand patterns behind what builds a succesful NBA team based on their teams composition (player salaries vs valuation).

# Compensation (TBD)
Find a seperate valuation based on player salaries and their statistics, find over performers and under performers based on salary ranges, be able to predict contract extensions based on valued compensation.
Look into Player Efficiency Rating and other advanced stats beyond regular statistics such as PPG, TRB, AST. 
