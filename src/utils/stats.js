
export const getAppStats = (apps) => {
  const totalDownloads = apps.reduce((sum, app) => sum + app.downloads, 0);
  const totalReviews = apps.reduce((sum, app) => sum + app.reviews, 0);
  const totalApps = apps.length;

  return {
    totalDownloads,
    totalReviews,
    totalApps,
  };
};