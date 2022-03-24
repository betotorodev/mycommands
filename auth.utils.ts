import type { AppProps } from 'next/app'
import { NextComponentType, NextPageContext } from 'next'

/**
 * Authentication configuration
 */
export interface AuthEnabledComponentConfig {
  authenticationEnabled: boolean;
}

/**
 * Authentication configuration for _app.tsx
 */
export type AppAuthProps = AppProps & {
  Component: NextComponentType<NextPageContext, any, {}> & Partial<AuthEnabledComponentConfig>;
};


/**
 * A component with authentication configuration
 */

export type ComponentWithAuth<PropsType = any> = React.FC<PropsType> &
  AuthEnabledComponentConfig;