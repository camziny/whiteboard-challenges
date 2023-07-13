def group_jobs_by_type(jobs, k):
  """Groups jobs by job_type, breaking the groups into no larger than size K.

  Args:
    jobs: A list of job instances which have a job_type property.
    k: The maximum size of each group.

  Returns:
    A dictionary mapping job_types to lists of jobs.
  """

  groups = defaultdict(list)
  for job in jobs:
    groups[job.job_type].append(job)

  for job_type, jobs in groups.items():
    if len(jobs) > k:
      groups[job_type] = jobs[:k]

  return groups
