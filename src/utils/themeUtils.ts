export const getStatusColor = (status: string): string => {
  switch (status.toLowerCase()) {
    case 'approved':
      return 'text-green-500';
    case 'pending':
      return 'text-orange-500';
    case 'rejected':
      return 'text-red-500';
    default:
      return 'text-gray-500';
  }
};