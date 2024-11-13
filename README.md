# Stock Clustering of S&P 500 and NASDAQ 100 Constituents for Investment Strategy Optimisation

[![LaTeX Build](https://github.com/nenuadrian/msc-business-analytics-dissertation/actions/workflows/latex.yml/badge.svg)](https://github.com/nenuadrian/msc-business-analytics-dissertation/actions/workflows/latex.yml)

## Overview

This project explores advanced clustering techniques to identify patterns and correlations in stock prices of S&P 500 and NASDAQ 100 companies. By leveraging Dynamic Time Warping (DTW) and Self-Organising Maps (SOM), we aim to provide insights that traditional methods might overlook.

## Objectives

1.	Analyze Historical Stock Data: Utilize clustering techniques to discover patterns in stock prices.
2.	Optimize Investment Strategies: Inform better decision-making by identifying similarly behaving stocks.
3.	Evaluate Clustering Methods: Compare Euclidean-based and DTW-based clustering approaches.

## Methodologies

### Clustering Techniques

1.	K-Means (Euclidean and DTW): Standard and time-warped versions to group stocks based on historical performance.
2.	Hierarchical Clustering (DTW): Generate flat clusters using a distance matrix and visual dendrograms.
3.	Self-Organising Maps (MiniSom): Neural network-based clustering for high-dimensional data.

### Data Processing

*	Normalization: Apply MinMax scaling to ensure consistent comparison.
*	Temporal Analysis: Focus on a selected time frame to avoid biases from external events like the COVID-19 pandemic.

### Evaluation Metrics

*	Silhouette Score: Measures how similar a stock is to its cluster compared to other clusters.
*	Calinski-Harabasz Index: Assesses the variance ratio within and between clusters.
*	Davies-Bouldin Index: Evaluates the average similarity ratio between clusters.

## Results

*	Euclidean K-Means: Provides a baseline for clustering performance.
*	DTW-based Methods: Capture asynchronous similarities, showing improved pattern recognition.
*	MiniSom: Demonstrates effective clustering with high-dimensional stock data.

## Future Work

*	Backtesting and Portfolio Assessment: Integrate algorithms into holistic investment strategies.
*	Inclusion of Additional Features: Expand data to include trading volumes and other financial metrics.
*	Robustness to Market Volatility: Enhance models to adapt to varying market conditions.

## Technology Stack

*	Programming Languages: Python, JavaScript
*	Libraries: Pandas, NumPy, Scikit-learn, Tslearn, Plotly, Matplotlib, Seaborn
*	Platforms: Google Cloud Platform, Google Colaboratory

# Cite

```
@article{dtwStockClustering,
	author = {Adrian Nenu and Sheik Meeran},
	title = {{Stock Clustering of S&P 500 and NASDAQ 100 Constituents for Investment Strategy Optimisation}},
  url = {[https://github.com/nenuadrian/msc-business-analytics-dissertation](github.com/nenuadrian/msc-business-analytics-dissertation)},
  year = 2023,
}
```
