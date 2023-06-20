const mapping: Record<string, string> = {
  'car-damages': 'car_damage',
  companies: 'company',
  quotes: 'quote',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
