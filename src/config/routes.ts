export const routes = {
  home: '/',
  courses: {
    list: '/',
    challenges: (courseId: number | string) => `/challenges/${courseId}`,
  },
  challenges: {
    detail: (id: string | number) => `/challenges/${id}`,
    start: (id: string | number) => `/challenges/${id}/start`,
  },
  login: '/login',
} as const;

// Type for route parameters
export type RouteParams = {
  courseId?: number | string;
  id?: string | number;
};

// Helper function to generate route paths with parameters
export function generatePath(path: string, params?: RouteParams): string {
  if (!params) return path;
  
  let result = path;
  Object.entries(params).forEach(([key, value]) => {
    result = result.replace(`:${key}`, String(value));
  });
  
  return result;
}

// Type-safe route generator functions
export const getRoutes = {
  home: () => routes.home,
  courses: {
    list: () => routes.courses.list,
    challenges: (courseId: number | string) => routes.courses.challenges(courseId),
  },
  challenges: {
    detail: (id: string | number) => routes.challenges.detail(id),
    start: (id: string | number) => routes.challenges.start(id),
  },
  login: () => routes.login,
} as const;
