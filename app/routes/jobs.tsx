import { Bookmark, Briefcase, MapPin, Search, Sliders } from 'lucide-react';
import { useState } from 'react';
import { Layout } from '~/components/layout';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardFooter } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { cn } from '~/libs/utils/cn';

// Mock data for initial development
const jobListings = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'Seoul, Korea',
    experienceLevel: '3-5 years',
    employmentType: 'Full-time',
    deadline: '2024-04-15',
    tags: ['React', 'TypeScript', 'Next.js'],
    thumbnail: 'https://placehold.co/600x400/1a1a1a/ffffff?text=TechCorp',
    postedDate: '2024-02-20',
    salary: '70,000,000 - 90,000,000',
  },
  {
    id: 2,
    title: 'UI/UX Designer with Frontend Skills',
    company: 'DesignHub',
    location: 'Remote',
    experienceLevel: '2-4 years',
    employmentType: 'Full-time',
    deadline: '2024-04-10',
    tags: ['Figma', 'React', 'CSS'],
    thumbnail: 'https://placehold.co/600x400/1a1a1a/ffffff?text=DesignHub',
    postedDate: '2024-02-22',
    salary: '55,000,000 - 70,000,000',
  },
  {
    id: 3,
    title: 'Frontend Developer Intern',
    company: 'StartupX',
    location: 'Busan, Korea',
    experienceLevel: '0-1 years',
    employmentType: 'Internship',
    deadline: '2024-03-30',
    tags: ['HTML', 'CSS', 'JavaScript'],
    thumbnail: 'https://placehold.co/600x400/1a1a1a/ffffff?text=StartupX',
    postedDate: '2024-02-25',
    salary: '30,000,000 - 35,000,000',
  },
  {
    id: 4,
    title: 'React Native Developer',
    company: 'MobileApps Inc',
    location: 'Hybrid',
    experienceLevel: '2-3 years',
    employmentType: 'Contract',
    deadline: '2024-04-05',
    tags: ['React Native', 'TypeScript', 'Mobile'],
    thumbnail: 'https://placehold.co/600x400/1a1a1a/ffffff?text=MobileApps',
    postedDate: '2024-02-18',
    salary: '60,000,000 - 75,000,000',
  },
  {
    id: 5,
    title: 'Frontend Team Lead',
    company: 'Enterprise Solutions',
    location: 'Seoul, Korea',
    experienceLevel: '5+ years',
    employmentType: 'Full-time',
    deadline: '2024-04-20',
    tags: ['React', 'Team Leadership', 'Architecture'],
    thumbnail: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Enterprise',
    postedDate: '2024-02-15',
    salary: '90,000,000 - 120,000,000',
  },
  {
    id: 6,
    title: 'Junior Frontend Developer',
    company: 'WebAgency',
    location: 'Incheon, Korea',
    experienceLevel: '1-2 years',
    employmentType: 'Full-time',
    deadline: '2024-03-25',
    tags: ['JavaScript', 'React', 'CSS'],
    thumbnail: 'https://placehold.co/600x400/1a1a1a/ffffff?text=WebAgency',
    postedDate: '2024-02-23',
    salary: '45,000,000 - 55,000,000',
  },
  {
    id: 7,
    title: 'Frontend Developer (Vue.js)',
    company: 'VueTech',
    location: 'Seoul, Korea',
    experienceLevel: '2-4 years',
    employmentType: 'Full-time',
    deadline: '2024-04-18',
    tags: ['Vue.js', 'JavaScript', 'Vuex'],
    thumbnail: 'https://placehold.co/600x400/1a1a1a/ffffff?text=VueTech',
    postedDate: '2024-02-21',
    salary: '60,000,000 - 80,000,000',
  },
  {
    id: 8,
    title: 'Frontend Performance Engineer',
    company: 'FastWeb',
    location: 'Remote',
    experienceLevel: '3-5 years',
    employmentType: 'Full-time',
    deadline: '2024-04-12',
    tags: ['Performance', 'JavaScript', 'Web Vitals'],
    thumbnail: 'https://placehold.co/600x400/1a1a1a/ffffff?text=FastWeb',
    postedDate: '2024-02-19',
    salary: '75,000,000 - 95,000,000',
  },
];

// Filter options
const experienceLevels = [
  'All levels',
  '0-1 years',
  '1-2 years',
  '2-4 years',
  '3-5 years',
  '5+ years',
];
const employmentTypes = [
  'All types',
  'Full-time',
  'Part-time',
  'Contract',
  'Internship',
];
const locations = [
  'All locations',
  'Seoul',
  'Busan',
  'Incheon',
  'Remote',
  'Hybrid',
];

// Sort options
const sortOptions = [
  { label: 'Latest', value: 'latest' },
  { label: 'Deadline', value: 'deadline' },
  { label: 'Company', value: 'company' },
];

export function meta() {
  return [
    { title: 'Job Listings - webKUFE' },
    {
      name: 'description',
      content:
        'Find frontend development job opportunities in the webKUFE community.',
    },
  ];
}

export default function Jobs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('All levels');
  const [selectedEmploymentType, setSelectedEmploymentType] =
    useState('All types');
  const [selectedLocation, setSelectedLocation] = useState('All locations');
  const [sortBy, setSortBy] = useState('latest');
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  // Filter jobs based on search query and filters
  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    const matchesExperience =
      selectedExperience === 'All levels' ||
      job.experienceLevel === selectedExperience;
    const matchesEmploymentType =
      selectedEmploymentType === 'All types' ||
      job.employmentType === selectedEmploymentType;
    const matchesLocation =
      selectedLocation === 'All locations' ||
      job.location.includes(selectedLocation.replace('All locations', ''));

    return (
      matchesSearch &&
      matchesExperience &&
      matchesEmploymentType &&
      matchesLocation
    );
  });

  // Sort jobs based on selected sort option
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return (
          new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
        );
      case 'deadline':
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      case 'company':
        return a.company.localeCompare(b.company);
      default:
        return 0;
    }
  });

  // Toggle job bookmark
  const toggleSaveJob = (jobId: number) => {
    setSavedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId],
    );
  };

  return (
    <Layout>
      <div className={cn('container mx-auto max-w-7xl px-4 py-8')}>
        {/* Header Section */}
        <div className={cn('mb-8')}>
          <h1 className={cn('mb-2 text-3xl font-bold')}>
            Frontend Developer Jobs
          </h1>
          <p className={cn('text-base text-muted-foreground')}>
            Find the best frontend development opportunities in Korea
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className={cn('mb-8')}>
          <div className={cn('relative mb-6')}>
            <Search
              className={cn(
                'absolute left-3 top-2.5 h-5 w-5 text-muted-foreground',
              )}
            />
            <Input
              type="search"
              placeholder="Search by job title, company, or skill..."
              className={cn('pl-10 h-12')}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
          </div>

          <div
            className={cn(
              'flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between',
            )}
          >
            <div className={cn('flex flex-wrap items-center gap-2')}>
              <Button
                variant="outline"
                size="sm"
                className={cn('flex items-center gap-1 h-9')}
              >
                <Sliders className="h-4 w-4" />
                <span>Filters</span>
              </Button>

              <select
                className={cn(
                  'rounded-md border border-input bg-background h-9 px-3 text-sm',
                )}
                value={selectedLocation}
                onChange={(e) => {
                  setSelectedLocation(e.target.value);
                }}
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>

              <select
                className={cn(
                  'rounded-md border border-input bg-background h-9 px-3 text-sm',
                )}
                value={selectedExperience}
                onChange={(e) => {
                  setSelectedExperience(e.target.value);
                }}
              >
                {experienceLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>

              <select
                className={cn(
                  'rounded-md border border-input bg-background h-9 px-3 text-sm',
                )}
                value={selectedEmploymentType}
                onChange={(e) => {
                  setSelectedEmploymentType(e.target.value);
                }}
              >
                {employmentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className={cn('flex items-center gap-2')}>
              <span className={cn('text-sm text-muted-foreground')}>
                Sort by:
              </span>
              <select
                className={cn(
                  'rounded-md border border-input bg-background h-9 px-3 text-sm',
                )}
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                }}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Active Filters */}
        <div className={cn('mb-6 flex flex-wrap items-center gap-2')}>
          {selectedLocation !== 'All locations' && (
            <Badge
              variant="outline"
              className={cn('flex items-center gap-1 px-3 py-1')}
            >
              <MapPin className="h-3 w-3" />
              {selectedLocation}
              <button
                type="button"
                className={cn(
                  'ml-1 text-muted-foreground hover:text-foreground',
                )}
                onClick={() => {
                  setSelectedLocation('All locations');
                }}
              >
                ×
              </button>
            </Badge>
          )}
          {selectedExperience !== 'All levels' && (
            <Badge variant="outline" className={cn('px-3 py-1')}>
              {selectedExperience}
              <button
                type="button"
                className={cn(
                  'ml-1 text-muted-foreground hover:text-foreground',
                )}
                onClick={() => {
                  setSelectedExperience('All levels');
                }}
              >
                ×
              </button>
            </Badge>
          )}
          {selectedEmploymentType !== 'All types' && (
            <Badge variant="outline" className={cn('px-3 py-1')}>
              {selectedEmploymentType}
              <button
                type="button"
                className={cn(
                  'ml-1 text-muted-foreground hover:text-foreground',
                )}
                onClick={() => {
                  setSelectedEmploymentType('All types');
                }}
              >
                ×
              </button>
            </Badge>
          )}
          {(selectedLocation !== 'All locations' ||
            selectedExperience !== 'All levels' ||
            selectedEmploymentType !== 'All types' ||
            searchQuery) && (
            <Button
              variant="ghost"
              size="sm"
              className={cn('text-sm text-muted-foreground')}
              onClick={() => {
                setSearchQuery('');
                setSelectedExperience('All levels');
                setSelectedEmploymentType('All types');
                setSelectedLocation('All locations');
              }}
            >
              Reset all filters
            </Button>
          )}
        </div>

        {/* Results Count */}
        <div className={cn('mb-6')}>
          <p className={cn('text-sm text-muted-foreground')}>
            {sortedJobs.length} jobs found
          </p>
        </div>

        {/* Job Listings */}
        {sortedJobs.length === 0 ? (
          <div
            className={cn(
              'flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center',
            )}
          >
            <Briefcase className={cn('mb-4 h-12 w-12 text-muted-foreground')} />
            <h3 className={cn('mb-2 text-xl font-semibold')}>No jobs found</h3>
            <p className={cn('text-muted-foreground')}>
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <div
            className={cn(
              'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
            )}
          >
            {sortedJobs.map((job) => (
              <Card
                key={job.id}
                className={cn(
                  'group flex flex-col overflow-hidden transition-all hover:shadow-md',
                )}
              >
                <div className={cn('relative')}>
                  <img
                    src={job.thumbnail}
                    alt={job.company}
                    className={cn('aspect-[4/3] w-full object-cover')}
                    loading="lazy"
                  />
                  <button
                    type="button"
                    className={cn(
                      'absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-600 transition-colors hover:bg-white',
                      savedJobs.includes(job.id) ? 'text-primary' : '',
                    )}
                    onClick={() => {
                      toggleSaveJob(job.id);
                    }}
                    aria-label={
                      savedJobs.includes(job.id) ? 'Unsave job' : 'Save job'
                    }
                  >
                    <Bookmark
                      className={cn(
                        'h-4 w-4',
                        savedJobs.includes(job.id) ? 'fill-primary' : '',
                      )}
                    />
                  </button>
                </div>

                <CardContent className={cn('flex flex-1 flex-col p-4')}>
                  <h2
                    className={cn(
                      'mb-1 line-clamp-2 text-lg font-semibold group-hover:text-primary',
                    )}
                  >
                    {job.title}
                  </h2>

                  <p className={cn('mb-1 font-medium')}>{job.company}</p>

                  <div
                    className={cn(
                      'mb-2 flex items-center text-sm text-muted-foreground',
                    )}
                  >
                    <MapPin className="mr-1 h-3 w-3" />
                    <span>{job.location}</span>
                  </div>

                  <p className={cn('mb-3 text-sm font-medium')}>
                    {job.salary}{' '}
                    <span className="text-muted-foreground">KRW</span>
                  </p>

                  <div className={cn('mt-auto')}>
                    <div className={cn('flex flex-wrap gap-1')}>
                      {job.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className={cn('bg-secondary/30 text-xs')}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className={cn('border-t bg-muted/20 px-4 py-3')}>
                  <div
                    className={cn(
                      'flex w-full items-center justify-between text-xs text-muted-foreground',
                    )}
                  >
                    <span>Posted: {job.postedDate}</span>
                    <span>Deadline: {job.deadline}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
