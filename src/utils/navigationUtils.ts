export const navigate = (navigation: any, screen: string, params?: any) => {
  navigation.navigate(screen, params);
};

export const goBack = (navigation: any) => {
  navigation.goBack();
};