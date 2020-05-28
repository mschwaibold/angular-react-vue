// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using IdentityServer4;
using IdentityServer4.Models;
using System.Collections.Generic;

namespace IDP
{
    public static class Config
    {
        public static IEnumerable<IdentityResource> Ids =>
            new IdentityResource[]
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile()
            };

        public static IEnumerable<ApiResource> Apis =>
            new ApiResource[]
            {
                new ApiResource("movieApi", "Movie API")
            };

        public static IEnumerable<Client> Clients =>
            new Client[]
            {
                // Angular Client
                new Client
                {
                    ClientId = "angular",
                    ClientName = "Angular Client",
                    AllowedGrantTypes = GrantTypes.Code,
                    RequirePkce = true,
                    RequireClientSecret = false,

                    RedirectUris =           { "https://localhost:44302/oidc-callback" },
                    PostLogoutRedirectUris = { "https://localhost:44302" },
                    AllowedCorsOrigins =     { "https://localhost:44302" },

                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "movieApi"
                    }
                },
   
                // React Client
                new Client
                {
                    ClientId = "react",
                    ClientName = "React Client",
                    AllowedGrantTypes = GrantTypes.Code,
                    RequirePkce = true,
                    RequireClientSecret = false,

                    RedirectUris =           { "https://localhost:44303/oidc-callback" },
                    PostLogoutRedirectUris = { "https://localhost:44303" },
                    AllowedCorsOrigins =     { "https://localhost:44303" },

                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "movieApi"
                    }
                },
                // Vue Client
                new Client
                {
                    ClientId = "vue",
                    ClientName = "Vue Client",
                    AllowedGrantTypes = GrantTypes.Code,
                    RequirePkce = true,
                    RequireClientSecret = false,

                    RedirectUris =           { "https://localhost:44304/oidc-callback" },
                    PostLogoutRedirectUris = { "https://localhost:44304" },
                    AllowedCorsOrigins =     { "https://localhost:44304" },

                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "movieApi"
                    }
                }
            };
    }
}