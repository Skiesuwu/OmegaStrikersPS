const app = require("express")();
const axios = require("axios").default;

app.listen(6980, () => {
  console.log("Wow");
});

app.all("/api/v1/friends/received-invites", (req, res) => {
  res.json({
    timestamp: "2020-05-21T18:36:38.383Z",
    invites: ["Radio.com"],
  });
});

app.all("/api/v1/friend", (req, res) => {
  res.json({
    timestamp: "2020-05-21T18:36:38.383Z",
    friends: ["Loolo is making me go crazy"],
  });
});

app.all("/api/v1/friends/sent-invite", (req, res) => {
  res.json({
    timestamp: new DataTransfer(),
    invites: ["Loolo is crazy"],
  });
});

app.all("/api/v1/me", (req, res) => {
  res.json(require("./api/v1/me.json"));
});

app.all("/api/v1/players/loadouts/role-presets", (req, res) => {
  res.json(require("./api/v1/players/loadouts/rolePresets.json"));
});

app.all("/api/v1/tutorial/screen-opened", (req, res) => {
  res.json({});
});

app.all("/api/v1/players/matchmaking-constraints", (req, res) => {
  res.json(require("./api/v1/players/matchmaking-constraints"));
});

app.all("/api/v1/players/selected-loadout", (req, res) => {
  res.json(require("./api/v1/players/selected-loadout.json"));
});

app.all("/api/v1/ranked/leaderboard/players", (req, res) => {
  console.log("uwu211231");
  res.json({});
});

app.all("/api/v1/entitlements/equip-for-account", (req, res) => {
  console.log("uwu 12");

  res.json({
    wasAlreadyEquipped: false,
    equipped: {
      timestamp: "2023-05-02T19:53:42.388Z",
      reactions: {
        defaultReactionList: { entries: [] },
        reactionListByCharacterId: {},
      },
      equipped: {
        GoalExplosion: { defaultId: "GoalExplosionData_BasicRecolor4" },
      },
    },
  });
});

app.all("/api/v1/players/matchmaking-constraints", (req, res) => {
  console.log("uwu");

  res.json({
    timestamp: "2023-05-02T19:53:11.164Z",
    selectedCharacterAssetName: "CD_StalwartProtector",
    intendedRole: "Flex",
    hasSelectedBanCharacter: false,
    selectedBanCharacterAssetName: "",
    region: "NorthAmerica",
  });
});

app.all("/api/v1/players/:id/loadouts", (req, res) => {
  res.json({
    timestamp: "2023-05-02T19:29:01.917Z",
    loadouts: [
      {
        slotId: "CD_RockOni",
        characterAssetId: "CD_RockOni",
        index: -1,
        allowedRoles: ["Flex"],
        trainingAssetIds: [
          "TD_StrikeRockSpeedUp",
          "TD_PrimaryAbilityCooldownReduction",
          "TD_DistancePower",
        ],
        customName: "Default Flex",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_UmbrellaUser",
        characterAssetId: "CD_UmbrellaUser",
        index: -1,
        allowedRoles: ["Goalie"],
        trainingAssetIds: [
          "TD_MaxStaggerIncrease",
          "TD_SpecialCooldownAfterRounds",
          "TD_PrimaryAbilityCooldownReduction",
        ],
        customName: "Default Goalie",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_EmpoweringEnchanterDefault",
        characterAssetId: "CD_EmpoweringEnchanter",
        index: -1,
        allowedRoles: ["Goalie"],
        trainingAssetIds: [
          "TD_SpecialCooldownAfterRounds",
          "TD_StrikeRockSpeedUp",
          "TD_PrimaryAbilityCooldownReduction",
        ],
        customName: "Default Goalie",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_StalwartProtectorDefault",
        characterAssetId: "CD_StalwartProtector",
        index: -1,
        allowedRoles: ["Goalie"],
        trainingAssetIds: [
          "TD_PrimaryAbilityCooldownReduction",
          "TD_MaxStaggerIncrease",
          "TD_SizeIncrease",
        ],
        customName: "Default Goalie",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_FlexibleBrawlerDefault",
        characterAssetId: "CD_FlexibleBrawler",
        index: -1,
        allowedRoles: ["Flex"],
        trainingAssetIds: [
          "TD_EmpoweredHitsBuff",
          "TD_StrikeRockSpeedUp",
          "TD_PrimaryAbilityCooldownReduction",
        ],
        customName: "Default Flex",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_NimbleBlasterDefault",
        characterAssetId: "CD_NimbleBlaster",
        index: -1,
        allowedRoles: ["Flex"],
        trainingAssetIds: [
          "TD_EmpoweredHitsBuff",
          "TD_SpecialCooldownAfterRounds",
          "TD_PrimaryAbilityCooldownReduction",
        ],
        customName: "Default Flex",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_ManipulatingMastermindDefault",
        characterAssetId: "CD_ManipulatingMastermind",
        index: -1,
        allowedRoles: ["Flex"],
        trainingAssetIds: [
          "TD_SpecialCooldownAfterRounds",
          "TD_BuffAndDebuffDuration",
          "TD_PrimaryAbilityCooldownReduction",
        ],
        customName: "Default Flex",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_MagicalPlaymakerDefault",
        characterAssetId: "CD_MagicalPlaymaker",
        index: -1,
        allowedRoles: ["Flex"],
        trainingAssetIds: [
          "TD_DistancePower",
          "TD_SpecialCooldownAfterRounds",
          "TD_PrimaryAbilityCooldownReduction",
        ],
        customName: "Default Flex",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_ChaoticRocketeerDefault",
        characterAssetId: "CD_ChaoticRocketeer",
        index: -1,
        allowedRoles: ["Goalie"],
        trainingAssetIds: [
          "TD_PrimaryAbilityCooldownReduction",
          "TD_EmpoweredHitsBuff",
          "TD_DistancePower",
        ],
        customName: "Default Goalie",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_TempoSniperDefault",
        characterAssetId: "CD_TempoSniper",
        index: -1,
        allowedRoles: ["Flex"],
        trainingAssetIds: [
          "TD_PrimaryAbilityCooldownReduction",
          "TD_DistancePower",
          "TD_StrikeRockSpeedUp",
        ],
        customName: "Default Flex",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_CleverSummonerDefault",
        characterAssetId: "CD_CleverSummoner",
        index: -1,
        allowedRoles: ["Flex"],
        trainingAssetIds: [
          "TD_SpecialCooldownAfterRounds",
          "TD_PrimaryAbilityCooldownReduction",
          "TD_DistancePower",
        ],
        customName: "Default Flex",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_HulkingBeastDefault",
        characterAssetId: "CD_HulkingBeast",
        index: -1,
        allowedRoles: ["Flex"],
        trainingAssetIds: [
          "TD_EmpoweredHitsBuff",
          "TD_KnockAnythingRecoverStagger",
          "TD_PrimaryAbilityCooldownReduction",
        ],
        customName: "Default Flex",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_MagicalPlaymakerDefaultAlternate",
        characterAssetId: "CD_MagicalPlaymaker",
        index: -1,
        allowedRoles: ["Goalie"],
        trainingAssetIds: [
          "TD_DistancePower",
          "TD_SpecialCooldownAfterRounds",
          "TD_PrimaryAbilityCooldownReduction",
        ],
        customName: "Default Goalie",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_StalwartProtectorDefaultAlternate",
        characterAssetId: "CD_StalwartProtector",
        index: -1,
        allowedRoles: ["Flex"],
        trainingAssetIds: [
          "TD_PrimaryAbilityCooldownReduction",
          "TD_MaxStaggerIncrease",
          "TD_SizeIncrease",
        ],
        customName: "Default Flex",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_FlexibleBrawlerDefaultAlternate",
        characterAssetId: "CD_FlexibleBrawler",
        index: -1,
        allowedRoles: ["Goalie"],
        trainingAssetIds: [
          "TD_EmpoweredHitsBuff",
          "TD_StrikeRockSpeedUp",
          "TD_PrimaryAbilityCooldownReduction",
        ],
        customName: "Default Goalie",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_SpeedySkirmisherDefaultAlternate",
        characterAssetId: "CD_SpeedySkirmisher",
        index: -1,
        allowedRoles: ["Goalie"],
        trainingAssetIds: [
          "TD_StrikeRockSpeedUp",
          "TD_PrimaryAbilityCooldownReduction",
          "TD_DistancePower",
        ],
        customName: "Default Goalie",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_CleverSummonerDefaultAlternate",
        characterAssetId: "CD_CleverSummoner",
        index: -1,
        allowedRoles: ["Goalie"],
        trainingAssetIds: [
          "TD_SpecialCooldownAfterRounds",
          "TD_PrimaryAbilityCooldownReduction",
          "TD_DistancePower",
        ],
        customName: "Default Goalie",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_NimbleBlasterDefaultAlternate",
        characterAssetId: "CD_NimbleBlaster",
        index: -1,
        allowedRoles: ["Goalie"],
        trainingAssetIds: [
          "TD_EmpoweredHitsBuff",
          "TD_SpecialCooldownAfterRounds",
          "TD_PrimaryAbilityCooldownReduction",
        ],
        customName: "Default Goalie",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_HulkingBeastDefaultAlternate",
        characterAssetId: "CD_HulkingBeast",
        index: -1,
        allowedRoles: ["Goalie"],
        trainingAssetIds: [
          "TD_EmpoweredHitsBuff",
          "TD_KnockAnythingRecoverStagger",
          "TD_PrimaryAbilityCooldownReduction",
        ],
        customName: "Default Goalie",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_TempoSniperDefaultAlternate",
        characterAssetId: "CD_TempoSniper",
        index: -1,
        allowedRoles: ["Goalie"],
        trainingAssetIds: [
          "TD_PrimaryAbilityCooldownReduction",
          "TD_DistancePower",
          "TD_StrikeRockSpeedUp",
        ],
        customName: "Default Goalie",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_AngelicSupportDefaultAlternate",
        characterAssetId: "CD_AngelicSupport",
        index: -1,
        allowedRoles: ["Flex"],
        trainingAssetIds: [
          "TD_MaxStaggerIncrease",
          "TD_SpecialCooldownAfterRounds",
          "TD_PrimaryAbilityCooldownReduction",
        ],
        customName: "Default Flex",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_ManipulatingMastermindDefaultAlternate",
        characterAssetId: "CD_ManipulatingMastermind",
        index: -1,
        allowedRoles: ["Goalie"],
        trainingAssetIds: [
          "TD_SpecialCooldownAfterRounds",
          "TD_BuffAndDebuffDuration",
          "TD_PrimaryAbilityCooldownReduction",
        ],
        customName: "Default Goalie",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_EmpoweringEnchanterDefaultAlternate",
        characterAssetId: "CD_EmpoweringEnchanter",
        index: -1,
        allowedRoles: ["Flex"],
        trainingAssetIds: [
          "TD_SpecialCooldownAfterRounds",
          "TD_StrikeRockSpeedUp",
          "TD_PrimaryAbilityCooldownReduction",
        ],
        customName: "Default Flex",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_ChaoticRocketeerDefaultAlternate",
        characterAssetId: "CD_ChaoticRocketeer",
        index: -1,
        allowedRoles: ["Flex"],
        trainingAssetIds: [
          "TD_PrimaryAbilityCooldownReduction",
          "TD_EmpoweredHitsBuff",
          "TD_DistancePower",
        ],
        customName: "Default Flex",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_ZipDefault",
        characterAssetId: "CD_Zip",
        index: -1,
        allowedRoles: ["Flex"],
        trainingAssetIds: [
          "TD_PrimaryAbilityCooldownReduction",
          "TD_StrikeRockSpeedUp",
          "TD_FasterDashes",
        ],
        customName: "Default Flex",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_ZipDefaultAlternate",
        characterAssetId: "CD_Zip",
        index: -1,
        allowedRoles: ["Goalie"],
        trainingAssetIds: [
          "TD_PrimaryAbilityCooldownReduction",
          "TD_StrikeRockSpeedUp",
          "TD_FasterDashes",
        ],
        customName: "Default Goalie",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_QuincyDefault",
        characterAssetId: "CD_Quincy",
        index: -1,
        allowedRoles: ["Flex"],
        trainingAssetIds: [
          "TD_EmpoweredHitsBuff",
          "TD_FasterDashes",
          "TD_SpecialCooldownAfterRounds",
        ],
        customName: "Default Flex",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_QuincyDefaultAlternate",
        characterAssetId: "CD_Quincy",
        index: -1,
        allowedRoles: ["Goalie"],
        trainingAssetIds: [
          "TD_EmpoweredHitsBuff",
          "TD_FasterDashes",
          "TD_SpecialCooldownAfterRounds",
        ],
        customName: "Default Goalie",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_GravityMage",
        characterAssetId: "CD_GravityMage",
        index: -1,
        allowedRoles: ["Goalie"],
        trainingAssetIds: [
          "TD_PrimaryAbilityCooldownReduction",
          "TD_SpecialCooldownAfterRounds",
          "TD_EmpoweredHitsBuff",
        ],
        customName: "Default Goalie",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_GravityMageAlternate",
        characterAssetId: "CD_GravityMage",
        index: -1,
        allowedRoles: ["Flex"],
        trainingAssetIds: [
          "TD_PrimaryAbilityCooldownReduction",
          "TD_SpecialCooldownAfterRounds",
          "TD_EmpoweredHitsBuff",
        ],
        customName: "Default Flex",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_DeadgeDefault",
        characterAssetId: "CD_Deadge",
        index: -1,
        allowedRoles: ["Flex"],
        trainingAssetIds: [
          "TD_EmpoweredHitsBuff",
          "TD_FasterDashes",
          "TD_KnockAnythingRecoverStagger",
        ],
        customName: "Default Flex",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_DeadgeDefaultAlternate",
        characterAssetId: "CD_Deadge",
        index: -1,
        allowedRoles: ["Goalie"],
        trainingAssetIds: [
          "TD_EmpoweredHitsBuff",
          "TD_FasterDashes",
          "TD_KnockAnythingRecoverStagger",
        ],
        customName: "Default Goalie",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_ShieldUserDefault",
        characterAssetId: "CD_ShieldUser",
        index: -1,
        allowedRoles: ["Flex"],
        trainingAssetIds: [
          "TD_PrimaryAbilityCooldownReduction",
          "TD_MaxStaggerIncrease",
          "TD_EmpoweredHitsBuff",
        ],
        customName: "Default Flex",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_ShieldUserDefaultAlternate",
        characterAssetId: "CD_ShieldUser",
        index: -1,
        allowedRoles: ["Goalie"],
        trainingAssetIds: [
          "TD_PrimaryAbilityCooldownReduction",
          "TD_MaxStaggerIncrease",
          "TD_EmpoweredHitsBuff",
        ],
        customName: "Default Goalie",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_EDMOniDefault",
        characterAssetId: "CD_EDMOni",
        index: -1,
        allowedRoles: ["Flex"],
        trainingAssetIds: [
          "TD_StrikeRockSpeedUp",
          "TD_SpecialCooldownAfterRounds",
          "TD_PrimaryAbilityCooldownReduction",
        ],
        customName: "Default Flex",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_RockOniDefaultAlternate",
        characterAssetId: "CD_RockOni",
        index: -1,
        allowedRoles: ["Goalie"],
        trainingAssetIds: [
          "TD_PrimaryAbilityCooldownReduction",
          "TD_EmpoweredHitsBuff",
          "TD_SpecialCooldownAfterRounds",
        ],
        customName: "Default Goalie",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_RockOniDefault",
        characterAssetId: "CD_RockOni",
        index: -1,
        allowedRoles: ["Flex"],
        trainingAssetIds: [
          "TD_PrimaryAbilityCooldownReduction",
          "TD_EmpoweredHitsBuff",
          "TD_SpecialCooldownAfterRounds",
        ],
        customName: "Default Flex",
        banCharacterAssetId: null,
      },
      {
        slotId: "CD_EDMOniDefaultAlternate",
        characterAssetId: "CD_EDMOni",
        index: -1,
        allowedRoles: ["Goalie"],
        trainingAssetIds: [
          "TD_StrikeRockSpeedUp",
          "TD_SpecialCooldownAfterRounds",
          "TD_PrimaryAbilityCooldownReduction",
        ],
        customName: "Default Goalie",
        banCharacterAssetId: null,
      },
    ],
  });
});

app.all("/api/v1/players/feature-flags", (req, res) => {
  res.json(require("./api/v1/players/feature-flags.json"));
});

app.all("/api/v1/regions", (req, res) => {
  res.json(require("./api/v1/regions.json"));
});

app.all("/api/v1/content/characters", (req, res) => {
  res.json(require("./api/v1/content/characters.json"));
});

app.all("/api/v1/players/:id/characters", (req, res) => {
  console.log(`${req.params.id} maybe this will work.`);

  res.json(require("./api/v1/content/characters.json"));
});

app.all("/api/v1/players/:id/power-ups", (req, res) => {
  console.log(`${req.params.id} maybe this will work.`);

  res.json(require("./api/v1/content/power-ups.json"));
});

app.all("/api/v1/players/:id/emoticons", (req, res) => {
  console.log(`${req.params.id} maybe this will work.`);

  res.json(require("./api/v1/content/emoticons.json"));
});

app.all("/api/v1/content/power-ups", (req, res) => {
  res.json(require("./api/v1/content/power-ups.json"));
});

app.all("/api/v1/content/emoticons", (req, res) => {
  res.json(require("./api/v1/content/emoticons.json"));
});

app.all("/api/v1/store/steam/prices", (req, res) => {
  res.json(require("./api/v1/store[1]/steam/prices.json"));
});

app.all("/api/v1/entitlements", (req, res) => {
  res.json(require("./api/v1/entitlements.json"));
});

app.all("/api/v1/entitlements/equipped", (req, res) => {
  res.json(require("./api/v1/entitlements[1]/equipped.json"));
});

app.all("/api/v1/catalog", (req, res) => {
  res.json(require("./api/v1/catalog.json"));
});

app.all("/api/v1/organizations", (req, res) => {
  res.json(require("./api/v1/organizations.json"));
});

app.all("/api/v1/store", (req, res) => {
  res.json(require("./api/v1/store.json"));
});

app.all("/api/v1/wallet", (req, res) => {
  res.json(require("./api/v1/wallet.json"));
});

app.all("/api/v1/tournament/player-status", (req, res) => {
  res.json(require("./api/v1/tournament/player-status.json"));
});

app.all("/api/v1/login/token", (req, res) => {
  res.json({
    timestamp: "2020-05-21T18:36:38.383Z",
    username: "Test",
    playerId: "",
    logoId: "EmoticonData_DefaultThumbsUp",
    title: "",
    nameplateId: "NameplateData_Basic",
    emoticonId: "EmoticonData_DefaultThumbsUp",
    titleId: "TitleData_None",
    tags: [],
    platformIds: {},
    masteryLevel: 1,
    currentPlatform: "Steam",
    displayNameStatus: "Ok",
    eulaNeeded: false,
    tutorialProgress: {
      timestamp: "2020-05-21T18:36:38.383Z",
      isTutorialComplete: true,
      screensOpened: ["Missions", "gearandawakeningtutorial"],
    },
    rookieRoadStatus: { complete: false, active: true },
    matchmakingRegion: "NorthAmerica",
    gameLiftRegionUrls: [
      { region: "us-east-2", url: "gamelift.us-east-2.amazonaws.com" },
      { region: "us-east-1", url: "gamelift.us-east-1.amazonaws.com" },
      { region: "us-west-1", url: "gamelift.us-west-1.amazonaws.com" },
      { region: "us-west-2", url: "gamelift.us-west-2.amazonaws.com" },
      { region: "ca-central-1", url: "gamelift.ca-central-1.amazonaws.com" },
    ],
    jwt: "",
    refreshToken: "",
  });
});

app.post("/api/v1/latencies-updates", (req, res) => {
  res.json({
    gameLiftLatencyList: [
      { region: "us-east-2", latency: 92 },
      { region: "ca-central-1", latency: 105 },
      { region: "us-west-2", latency: 257 },
      { region: "us-west-1", latency: 142 },
      { region: "us-east-1", latency: 109 },
    ],
  });
});

app.post("/api/v1/latencies-update", (req, res) => {
  res.json({
    gameLiftLatencyList: [
      { region: "us-east-2", latency: 92 },
      { region: "ca-central-1", latency: 105 },
      { region: "us-west-2", latency: 257 },
      { region: "us-west-1", latency: 142 },
      { region: "us-east-1", latency: 109 },
    ],
  });
});

app.all("/api/v1/players", (req, res) => {
  res.json({});
});

app.post("/api/v1/login/steam", async (req, res) => {
  res.json({
    timestamp: "2020-05-21T18:36:38.383Z",
    username: "Test",
    playerId: "",
    logoId: "EmoticonData_DefaultThumbsUp",
    title: "",
    nameplateId: "NameplateData_Basic",
    emoticonId: "EmoticonData_DefaultThumbsUp",
    titleId: "TitleData_None",
    tags: [],
    platformIds: {},
    masteryLevel: 1,
    currentPlatform: "Steam",
    displayNameStatus: "Ok",
    eulaNeeded: false,
    tutorialProgress: {
      timestamp: "2020-05-21T18:36:38.383Z",
      isTutorialComplete: true,
      screensOpened: ["Missions", "gearandawakeningtutorial"],
    },
    rookieRoadStatus: { complete: true, active: true },
    matchmakingRegion: "NorthAmerica",
    gameLiftRegionUrls: [
      { region: "us-east-2", url: "gamelift.us-east-2.amazonaws.com" },
      { region: "us-east-1", url: "gamelift.us-east-1.amazonaws.com" },
      { region: "us-west-1", url: "gamelift.us-west-1.amazonaws.com" },
      { region: "us-west-2", url: "gamelift.us-west-2.amazonaws.com" },
      { region: "ca-central-1", url: "gamelift.ca-central-1.amazonaws.com" },
    ],
    jwt: "",
    refreshToken: "",
  });
});

app.all("/api/v2/daily-login/new-player-daily-login", (req, res) => {
  res.json({
    timestamp: "2020-05-21T18:36:38.383Z",
    currentServerDayStartTimestamp: "2020-05-21T18:36:38.383Z",
    track: {
      trackId: "new-player-daily-login",
      days: [
        {
          rewards: [
            {
              type: "ENTITLEMENT",
              entitlementType: "Nameplate",
              entitlementId: "NameplateData_OdyJuno",
              iconId: "",
            },
          ],
        },
        {
          rewards: [
            {
              type: "CURRENCY",
              currencyType: "SOFT",
              amount: 10000,
              iconId: "",
            },
          ],
        },
        {
          rewards: [
            {
              type: "ENTITLEMENT",
              entitlementType: "Emoticon",
              entitlementId: "EmoticonData_JulietteComfy",
              iconId: "",
            },
          ],
        },
        {
          rewards: [
            {
              type: "CURRENCY",
              currencyType: "SOFT",
              amount: 10000,
              iconId: "",
            },
          ],
        },
        {
          rewards: [
            {
              type: "ENTITLEMENT",
              entitlementType: "Title",
              entitlementId: "TitleData_Striker",
              iconId: "",
            },
          ],
        },
        {
          rewards: [
            {
              type: "ENTITLEMENT",
              entitlementType: "Emoticon",
              entitlementId: "EmoticonData_BlobboCheer",
              iconId: "",
            },
          ],
        },
        {
          rewards: [
            {
              type: "ENTITLEMENT",
              entitlementType: "GoalExplosion",
              entitlementId: "GoalExplosionData_Blobbo",
              iconId: "",
            },
          ],
        },
      ],
    },
    progress: { trackId: "new-player-daily-login", idxNextDayToClaim: 0 },
  });
});

app.all("/api/v2/battle-pass", (req, res) => {
  res.json(require("./api/v2/battle-pass.json"));
});

app.all("/api/v2/battle-pass/progress", (req, res) => {
  res.json(require("./api/v2/battle-pass[1]/progress.json"));
});

app.all("/api/v1/ranked/leaderboard/search/:id", (req, res) => {
  res.json({ id: req.params.id });
});

app.post("/api/v2/battle-pass/begin", (req, res) => {
  res.json({ battlePassId: "63f935c3284cddc6cbef243c" });
});

app.all("/api/v2/battle-pass/missions", (req, res) => {
  res.json({
    error: {
      message: "Cannot find battle pass instance",
      type: "Error",
      code: 92,
      error_user_title: "something_went_wrong_title",
      error_user_msg: "something_went_wrong_body",
      trace_id: "e17a9821-2d36-4981-adfb-2436dde138db",
    },
  });

  //require("./api/v2/battle-pass/missions.json")
});

app.all("/api/v2/mastery/characters/definitions", (req, res) => {
  res.json(require("./api/v2/mastery/characters/definitions.json"));
});

app.all("/api/v1/mastery/:id/player", (req, res) => {
  res.json({
    timestamp: "2023-05-02T03:49:45.307Z",
    playerId: `${req.params.id}`,
    currentLevel: 100000000000000,
    currentLevelXp: 10000000000000,
    xpToNextLevel: 20000000000000000,
    totalXp: 200000000000,
  });
});

app.all("/api/v2/rookie-road/:id", (req, res) => {
  const rookieRoad = require("./api/v2/rookie-road/rookieRoad.json");
  const rookieRoadProgress = require("./api/v2/rookie-road/progress.json");

  if (
    rookieRoad.rookieRoadDefinition.id === null &&
    rookieRoadProgress.instance.playerId === null
  ) {
    rookieRoad.rookieRoadDefinition.id = req.params.id;
    rookieRoadProgress.instance.playerId = req.params.id;
    rookieRoadProgress.instance.definitionId = req.params.id;

    return res.json({ rookieRoad, rookieRoadProgress });
  }
});

app.all("/api/v2/mastery/:id/characters", (req, res) => {
  res.json({
    timestamp: "2023-05-02T08:22:28.537Z",
    playerId: `${req.params.id}`,
    characterMasteries: [
      {
        characterAssetName: "CD_RockOni",
        totalXp: 433,
        maxTier: 10,
        idxHighestTierCollected: -1,
        currentTier: 0,
        currentTierXp: 433,
        xpToNextTier: 1500,
      },
    ],
  });
});

app.all("/api/v1/mastery/:id/characters", (req, res) => {
  res.json({
    timestamp: "",
    playerId: `${req.params.id}`,
    characterMasteries: [],
  });
});

app.all("/api/v1/ranked/season/current", (req, res) => {
  res.json(require("./api/v1/ranked/season/current.json"));
});

app.all("/api/v2/rookie-road/progress", (req, res) => {
  res.json(require("./api/v2/rookie-road/progress.json"));
});

app.all("/api/v2/rookie-road/:id", (req, res) => {
  res.json({
    timestamp: "2023-05-02T07:31:02.135Z",
    rookieRoadDefinition: {
      id: req.params["id"],
      missionSets: [
        {
          rewards: [{ type: "FEATURE", iconId: "", flagName: "UI_Shop" }],
          missions: [
            {
              title: "RookieRoadSet1Mission1Desc",
              iconId: "",
              rewards: [
                {
                  type: "CURRENCY",
                  currencyType: "SOFT",
                  amount: 2500,
                  iconId: "",
                },
              ],
              objectiveCategory: "Numeric",
              categoricalObjectives: [],
              numericObjectives: [
                { type: "GoalsAndAssists", iconId: "", target: 1 },
              ],
            },
            {
              title: "RookieRoadSet1Mission2Desc",
              iconId: "",
              rewards: [
                {
                  type: "CURRENCY",
                  currencyType: "SOFT",
                  amount: 2500,
                  iconId: "",
                },
              ],
              objectiveCategory: "Numeric",
              categoricalObjectives: [],
              numericObjectives: [{ type: "Strikes", iconId: "", target: 5 }],
            },
            {
              title: "RookieRoadSet1Mission3Desc",
              iconId: "",
              rewards: [
                {
                  type: "CURRENCY",
                  currencyType: "SOFT",
                  amount: 2500,
                  iconId: "",
                },
              ],
              objectiveCategory: "Numeric",
              categoricalObjectives: [],
              numericObjectives: [{ type: "PowerOrbs", iconId: "", target: 1 }],
            },
            {
              title: "RookieRoadSet1Mission4Desc",
              iconId: "",
              rewards: [
                {
                  type: "CURRENCY",
                  currencyType: "SOFT",
                  amount: 2500,
                  iconId: "",
                },
              ],
              objectiveCategory: "Numeric",
              categoricalObjectives: [],
              numericObjectives: [{ type: "Damage", iconId: "", target: 500 }],
            },
          ],
        },
        {
          rewards: [
            { type: "FEATURE", iconId: "", flagName: "GameMode_Ranked" },
          ],
          missions: [
            {
              title: "RookieRoadSet2Mission1Desc",
              iconId: "",
              rewards: [
                {
                  type: "CURRENCY",
                  currencyType: "SOFT",
                  amount: 5000,
                  iconId: "",
                },
              ],
              objectiveCategory: "Categorical",
              categoricalObjectives: [
                {
                  type: "PurchaseEntitlement",
                  iconId: "",
                  target: 1,
                  targetValue: "Character",
                },
              ],
              numericObjectives: [],
            },
            {
              title: "RookieRoadSet2Mission2Desc",
              iconId: "",
              rewards: [
                {
                  type: "ENTITLEMENT",
                  entitlementType: "Title",
                  entitlementId: "TitleData_Competitor",
                  iconId: "",
                },
              ],
              objectiveCategory: "Categorical",
              categoricalObjectives: [
                {
                  type: "VisitUISection",
                  iconId: "",
                  target: 1,
                  targetValue: "Menu_Leaderboard",
                },
              ],
              numericObjectives: [],
            },
            {
              title: "RookieRoadSet2Mission3Desc",
              iconId: "",
              rewards: [
                {
                  type: "ENTITLEMENT",
                  entitlementType: "Emoticon",
                  entitlementId: "EmoticonData_JulietteHeart",
                  iconId: "",
                },
              ],
              objectiveCategory: "Categorical",
              categoricalObjectives: [
                {
                  type: "VisitUISection",
                  iconId: "",
                  target: 1,
                  targetValue: "Menu_Friends",
                },
              ],
              numericObjectives: [],
            },
            {
              title: "RookieRoadSet2Mission4Desc",
              iconId: "",
              rewards: [
                {
                  type: "ENTITLEMENT",
                  entitlementType: "Emote",
                  entitlementId: "EmoteData_Juliette_Delighted",
                  iconId: "",
                },
              ],
              objectiveCategory: "Numeric",
              categoricalObjectives: [],
              numericObjectives: [
                { type: "PlayAsFlex", iconId: "", target: 1 },
              ],
            },
            {
              title: "RookieRoadSet2Mission5Desc",
              iconId: "",
              rewards: [
                {
                  type: "ENTITLEMENT",
                  entitlementType: "Emote",
                  entitlementId: "EmoteData_Dubu_Delighted",
                  iconId: "",
                },
              ],
              objectiveCategory: "Numeric",
              categoricalObjectives: [],
              numericObjectives: [
                { type: "PlayAsGoalie", iconId: "", target: 1 },
              ],
            },
          ],
        },
        {
          rewards: [
            { type: "CURRENCY", currencyType: "HARD", amount: 200, iconId: "" },
          ],
          missions: [
            {
              title: "RookieRoadSet3Mission1Desc",
              iconId: "",
              rewards: [
                {
                  type: "CURRENCY",
                  currencyType: "SOFT",
                  amount: 1000,
                  iconId: "",
                },
              ],
              objectiveCategory: "Categorical",
              categoricalObjectives: [
                {
                  type: "VisitUISection",
                  iconId: "",
                  target: 1,
                  targetValue: "Menu_Personalization",
                },
              ],
              numericObjectives: [],
            },
            {
              title: "RookieRoadSet3Mission2Desc",
              iconId: "",
              rewards: [
                {
                  type: "CURRENCY",
                  currencyType: "SOFT",
                  amount: 1000,
                  iconId: "",
                },
              ],
              objectiveCategory: "Categorical",
              categoricalObjectives: [
                {
                  type: "VisitUISection",
                  iconId: "",
                  target: 1,
                  targetValue: "Menu_ProfileSettings",
                },
              ],
              numericObjectives: [],
            },
            {
              title: "RookieRoadSet3Mission3Desc",
              iconId: "",
              rewards: [
                {
                  type: "CURRENCY",
                  currencyType: "SOFT",
                  amount: 1000,
                  iconId: "",
                },
              ],
              objectiveCategory: "Categorical",
              categoricalObjectives: [
                {
                  type: "VisitUISection",
                  iconId: "",
                  target: 1,
                  targetValue: "Menu_StrikerAffinity",
                },
              ],
              numericObjectives: [],
            },
          ],
        },
      ],
    },
  });
});

app.all("/api/v1/in-app-purchase/*", (req, res) => {
  res.json(require("./api/v1/in-app-purchase[1].json"));
});

app.all("/api/v1/supported-regions", (req, res) => {
  res.json(require("./api/v1/supported-regions.json"));
});

app.all("/api/v2/event-mission-sets", (req, res) => {
  res.json(
    require("./api/v2/event-mission-sets[1]/creator_versus_2023_1/begin.json")
  );
});

app.all("/api/v1/settings", (req, res) => {
  res.json(require("./api/v1/settings.json"));
});

app.all("/api/v1/chat/group-messages/:id", (req, res) => {
  res.json(
    require("./api/v1/chat/group-messages/1c6eb691-33b9-4547-9fb7-6ce85d414fa3.json")
  );
});

app.all("/api/v1/events/:leaderboardId/leaderboard", (req, res) => {
  console.log(`From events/:leaderboardId: ${req.params.leaderboardId}`);
});

app.all("/api/v1/popups", (req, res) => {
  res.json(require("./api/v1/popups.json"));
});
