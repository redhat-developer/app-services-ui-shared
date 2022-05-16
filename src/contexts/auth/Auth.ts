import React, { useContext } from "react";

/**
 * The Auth object provides information about the authenticated user
 */
export type Auth = {
    /**
     * Get the username of the authenticated user
     */
    getUsername: () => Promise<string> | undefined
    /**
     * Get the is_org_admin of the authenticated user
     */
    isOrgAdmin: () => Promise<boolean> | undefined
    kas: {
        /**
         * Get the token for accessing the KAS Fleet Manager
         */
        getToken: () => Promise<string> | undefined
    }
    ams: {
        /**
         * Get the token for accessing the Account Management Service
         */
        getToken: () => Promise<string> | undefined
    }
    kafka: {
        /**
         * Get the token for access the Kafka instance
         */
        getToken: () => Promise<string> | undefined
    }
    srs: {
        /**
         * Get the token for accessing the SRS Fleet Manager
         */
        getToken: () => Promise<string> | undefined
    },
    apicurio_registry: {
        /**
         * Get the token for accessing the service registry data plane
         */
        getToken: () => Promise<string> | undefined
    },
    smart_events: {
        /**
         * Get the token for accessing Smart Events
         */
        getToken: () => Promise<string> | undefined
    }
}

/**
 * The AuthContext allows access to the Auth context
 */
export const AuthContext: React.Context<Auth | undefined> = React.createContext<Auth | undefined>(undefined);

/**
 * useAuth is a custom hook that is a shorthand for useContext(AuthContext)
 */
export const useAuth = (): Auth => {
    const answer = useContext(AuthContext);
    if (answer === undefined) {
        throw new Error("must be used inside an AuthContext provider");
    }
    return answer;
};
