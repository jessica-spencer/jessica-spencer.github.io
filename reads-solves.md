---
layout: page
sidebar_link: true
title: Evaluating Reads + Solves
description: Evaluating a citywide literacy and mathematics initiative through longitudinal student and implementation data.
---

# Evaluating Reads + Solves

*Using longitudinal student and implementation data to evaluate a citywide literacy and mathematics initiative.*

> This case study describes internal evaluation work at a high level. Specific estimates, student-level data, and detailed findings are omitted to protect confidential information.

## Abstract

Reads + Solves are NYC Public Schools' citywide literacy and mathematics curriculum initiatives, implemented in phases across schools.

I evaluated associations between implementation and student outcomes using NYS assessments, academic screeners, implementation data, and five years of longitudinal student performance.

The evaluation found that outcomes were generally similar to the previous year, with mostly flat or slightly positive results across screeners. Looking across five years, most literacy and math outcomes showed a positive linear trend. Schools with higher implementation scores were also associated with more positive outcomes.

The analysis also provided additional evidence that an unusually high K–5 ELA result in the prior year was anomalous.

Because implementation was not randomized, these findings describe associations rather than causal effects.

## The Evaluation

Reads + Solves were introduced to support evidence-based literacy and mathematics instruction following the pandemic. Schools select from a set of approved curricula and receive supplemental materials and job-embedded support.

Implementation occurred in phases, providing an opportunity to examine outcomes across different stages of adoption.

## Data Pipeline

I updated the prior year's analysis and refactored legacy Stata code into a documented ETL pipeline with checkpointing.

This reduced redundant processing and created a more maintainable, reusable workflow for the annual evaluation.

**Data:** NYS assessments · Academic screeners · Implementation measures · Longitudinal student data

**Tools:** Stata

## Analysis

I used **comparative interrupted time series (CITS)** and multilevel regression to examine whether outcome trajectories differed across implementation phases.

I also conducted:

- Descriptive and exploratory analyses across phases and student groups
- Subgroup analyses with multiple-hypothesis correction
- Implementation-outcome analyses
- Longitudinal analysis of student performance

A five-year standardized measure provided an additional way to distinguish short-term fluctuations from longer-term student trajectories.

## Investigating the K–5 Reading Results

The prior year's K–5 ELA results showed an unusually large increase.

Rather than treating that change as evidence of improvement, I investigated whether it was consistent with broader patterns in student performance.

Comparing outcomes across grades, demographic groups, assessments, and longitudinal trends provided additional evidence that the prior-year result was anomalously high.

> A surprising result is a question to investigate, not necessarily a conclusion.

## Findings

Across the outcomes examined, student performance was generally similar to the previous year, with mostly flat or slightly positive results on academic screeners.

Across the five-year period, most literacy and mathematics outcomes showed a positive linear trend.

I also found evidence of an association between implementation measures and student outcomes: schools with higher implementation scores tended to have more positive outcomes.

These findings are observational. Because schools were not randomly assigned to implementation phases, the analysis cannot establish that implementation caused differences in student outcomes.

## Takeaway

The evaluation combined implementation data with multiple measures of student performance to distinguish short-term changes from longer-term trends and investigate unexpected results.

The work illustrates how rigorous evaluation can provide useful evidence even when randomized experimental designs are not possible—by being explicit about uncertainty, testing competing explanations, and grounding conclusions in multiple sources of data.

---

**Methods:** Comparative interrupted time series · multilevel regression · subgroup analysis · longitudinal standardization · multiple-hypothesis correction

**Data:** NYS assessments · academic screeners · implementation measures · longitudinal student data

**Tools:** Stata