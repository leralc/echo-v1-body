import AssetManager from "../../assetManager";

/** @type { CustomAssetDefinition } */
const asset = {
    Name: "更多有线跳蛋_Luzi",
    Random: false,
    Gender: "F",
    Top: 0,
    Left: 0,
    Difficulty: 25,
    Prerequisite: ["HasBreasts", "AccessVulva"],
    Priority: 14,
    PoseMapping: {
        AllFours: "Hide",
        Hogtied: "Hide",
        Kneel: "Kneel",
        KneelingSpread: "KneelingSpread",
        LegsClosed: "LegsClosed",
    },
    DefaultColor: ["Default", "Default", "Default", "#3B3B3B", "Default", "Default", "#3B3B3B"],
    Layer: [
        {
            Name: "跳蛋1",
            AllowTypes: { n: [0, 1, 2, 3, 4] },
        },
        {
            Name: "跳蛋2",
            AllowTypes: { n: [1, 2, 3, 4] },
        },
        {
            Name: "跳蛋5",
            AllowTypes: { n: [4] },
        },
        {
            Name: "绑带5",
            ParentGroup: "BodyLower",
            AllowTypes: { n: [4] },
        },
        {
            Name: "跳蛋3",
            AllowTypes: { n: [2, 3, 4] },
        },
        {
            Name: "跳蛋4",
            AllowTypes: { n: [3, 4] },
        },
        {
            Name: "绑带",
            ParentGroup: "BodyLower",
        },
    ],
};

/** @type {AssetArchetypeConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    Modules: [
        {
            Name: "跳蛋开关",
            DrawImages: false,
            Key: "o",
            Options: [
                {
                    Property: { Intensity: -1, Effect: ["Egged"] },
                },
                {
                    Property: { Intensity: 0, Effect: ["Egged", "Vibrating"] },
                },
                {
                    Property: { Intensity: 1, Effect: ["Egged", "Vibrating"] },
                },
                {
                    Property: { Intensity: 3, Effect: ["Egged", "Vibrating"] },
                },
                {
                    Property: { Intensity: 3, Effect: ["Egged", "Vibrating"] },
                },
            ],
        },
        {
            Name: "跳蛋数量",
            DrawImages: false,
            Key: "n",
            Options: [{}, {}, {}, {}, {}],
        },
    ],
};

/** @type {CustomDialogSet} */
const dialog = {
    CN: {
        ItemVulva更多有线跳蛋_LuziSelectBase: "选择配置",
        ItemVulva更多有线跳蛋_LuziSelect跳蛋开关: "跳蛋开关",
        ItemVulva更多有线跳蛋_LuziSelect跳蛋数量: "跳蛋数量",
        ItemVulva更多有线跳蛋_LuziModule跳蛋开关: "跳蛋开关",
        ItemVulva更多有线跳蛋_LuziModule跳蛋数量: "跳蛋数量",
        ItemVulva更多有线跳蛋_LuziOptionn0: "1个",
        ItemVulva更多有线跳蛋_LuziOptionn1: "2个",
        ItemVulva更多有线跳蛋_LuziOptionn2: "3个",
        ItemVulva更多有线跳蛋_LuziOptionn3: "4个",
        ItemVulva更多有线跳蛋_LuziOptionn4: "5个",
        ItemVulva更多有线跳蛋_LuziOptiono0: "关闭",
        ItemVulva更多有线跳蛋_LuziOptiono1: "低",
        ItemVulva更多有线跳蛋_LuziOptiono2: "中",
        ItemVulva更多有线跳蛋_LuziOptiono3: "高",
        ItemVulva更多有线跳蛋_LuziOptiono4: "最高",

        ItemVulva更多有线跳蛋_LuziSeto0: "SourceCharacter拨动开关,将TargetCharacter的跳蛋设置为关闭.",
        ItemVulva更多有线跳蛋_LuziSeto1: "SourceCharacter拨动开关,将TargetCharacter的跳蛋设置为低.",
        ItemVulva更多有线跳蛋_LuziSeto2: "SourceCharacter拨动开关,将TargetCharacter的跳蛋设置为中.",
        ItemVulva更多有线跳蛋_LuziSeto3: "SourceCharacter拨动开关,将TargetCharacter的跳蛋设置为高.",
        ItemVulva更多有线跳蛋_LuziSeto4: "SourceCharacter拨动开关,将TargetCharacter的跳蛋设置为最高.",
        ItemVulva更多有线跳蛋_LuziSetn0: "SourceCharacter将TargetCharacter阴部的跳蛋拉出,仅剩下1个.",
        ItemVulva更多有线跳蛋_LuziSetn1: "SourceCharacter摆弄着有线跳蛋,现在TargetCharacter的阴道内有2个跳蛋.",
        ItemVulva更多有线跳蛋_LuziSetn2: "SourceCharacter摆弄着有线跳蛋,现在TargetCharacter的阴道内有3个跳蛋.",
        ItemVulva更多有线跳蛋_LuziSetn3: "SourceCharacter摆弄着有线跳蛋,现在TargetCharacter的阴道内有4个跳蛋.",
        ItemVulva更多有线跳蛋_LuziSetn4: "SourceCharacter摆弄着有线跳蛋,现在TargetCharacter的阴道内有5个跳蛋.",
    },
    EN: {
        ItemVulva更多有线跳蛋_LuziSelectBase: "Select Configuration",
        ItemVulva更多有线跳蛋_LuziSelect跳蛋开关: "Select Vibrator Switch",
        ItemVulva更多有线跳蛋_LuziSelect跳蛋数量: "Select Vibrator Quantity",
        ItemVulva更多有线跳蛋_LuziModule跳蛋开关: "Select Vibrator Switch",
        ItemVulva更多有线跳蛋_LuziModule跳蛋数量: "Select Vibrator Quantity",
        ItemVulva更多有线跳蛋_LuziOptionn0: "1 Vibrator",
        ItemVulva更多有线跳蛋_LuziOptionn1: "2 Vibrators",
        ItemVulva更多有线跳蛋_LuziOptionn2: "3 Vibrators",
        ItemVulva更多有线跳蛋_LuziOptionn3: "4 Vibrators",
        ItemVulva更多有线跳蛋_LuziOptionn4: "5 Vibrators",
        ItemVulva更多有线跳蛋_LuziOptiono0: "Off",
        ItemVulva更多有线跳蛋_LuziOptiono1: "Low",
        ItemVulva更多有线跳蛋_LuziOptiono2: "Medium",
        ItemVulva更多有线跳蛋_LuziOptiono3: "High",
        ItemVulva更多有线跳蛋_LuziOptiono4: "Maximum",

        ItemVulva更多有线跳蛋_LuziSeto0:
            "SourceCharacter flicks the switch, setting TargetCharacter's vibrator egg to off.",
        ItemVulva更多有线跳蛋_LuziSeto1:
            "SourceCharacter flicks the switch, setting TargetCharacter's vibrator egg to low.",
        ItemVulva更多有线跳蛋_LuziSeto2:
            "SourceCharacter flicks the switch, setting TargetCharacter's vibrator egg to medium.",
        ItemVulva更多有线跳蛋_LuziSeto3:
            "SourceCharacter flicks the switch, setting TargetCharacter's vibrator egg to high.",
        ItemVulva更多有线跳蛋_LuziSeto4:
            "SourceCharacter flicks the switch, setting TargetCharacter's vibrator egg to maximum.",
        ItemVulva更多有线跳蛋_LuziSetn0:
            "SourceCharacter pulls out the vibrator egg from TargetCharacter's genitalia, leaving only one remaining.",
        ItemVulva更多有线跳蛋_LuziSetn1:
            "SourceCharacter fiddles with the wired vibrator egg, now there are two vibrator eggs inside TargetCharacter's vagina.",
        ItemVulva更多有线跳蛋_LuziSetn2:
            "SourceCharacter fiddles with the wired vibrator egg, now there are three vibrator eggs inside TargetCharacter's vagina.",
        ItemVulva更多有线跳蛋_LuziSetn3:
            "SourceCharacter fiddles with the wired vibrator egg, now there are four vibrator eggs inside TargetCharacter's vagina.",
        ItemVulva更多有线跳蛋_LuziSetn4:
            "SourceCharacter fiddles with the wired vibrator egg, now there are five vibrator eggs inside TargetCharacter's vagina.",
    },
};

export default function () {
    AssetManager.addAsset("ItemVulva", asset, extended);
    AssetManager.addCustomDialog(dialog);
}
