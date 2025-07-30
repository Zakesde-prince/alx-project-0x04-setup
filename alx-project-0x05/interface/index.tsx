// interface/index.ts

export interface PageRouteProps {
  pageRoute: string;
}

export interface ButtonProps {
  action: () => void;
  buttonLabel: string;
  buttonBackgroundColor: "blue" | "green" | "orange";
}

export interface LayoutProps {
  children: React.ReactNode;
}
