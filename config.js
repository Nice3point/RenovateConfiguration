// Renovate (self-hosted) configuration for GitHub platform
// Reference: https://docs.renovatebot.com/self-hosted-configuration/

module.exports = {
    // Baseline preset.
    extends: [
        "group:monorepos",
        "group:recommended",
        "replacements:all",
        "workarounds:all",
        ":configMigration",
        "abandonments:recommended"
    ],

    // Managed repositories
    repositories: [
        "Nice3point/RevitApi",
        "Nice3point/RevitToolkit",
        "Nice3point/RevitExtensions",
        "Nice3point/RevitTemplates",
        "Nice3point/RevitUnit",
        "Nice3point/RevitBenchmark",
        "lookup-foundation/RevitLookup"
    ],

    // Create an Issue with a dashboard for all updates
    dependencyDashboard: false,
    // Disable creation of the onboarding PR (Configure Renovate) in new repositories
    onboarding: true,
    prHourlyLimit: 0,
    prConcurrentLimit: 0,

    labels: ["maintenance ⚙️"],

    // Disable semantic commits (removes chore(deps): prefix)
    semanticCommits: "disabled",
    
    // Custom package grouping rules
    packageRules: [
        {
            groupName: "ModularPipelines",
            matchPackageNames: ["/^ModularPipelines/"]
        },
        {
            groupName: "Microsoft.Extensions",
            matchPackageNames: ["/Microsoft.Extensions/"]
        }
    ]
};
