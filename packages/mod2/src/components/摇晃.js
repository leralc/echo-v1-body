import ActivityManager from "@mod-utils/ActivityManager";
import ChatRoomOrder from "@mod-utils/ChatRoomOrder";

/**
* 道具切换
* @param {string} item1 - 道具名称 1
* @param {string} item2 - 道具名称 2
*/// @ts-ignore
function shakeTail(player, itemgroup, item1, item2) {
    for (let i = 0; i < 4; i++) {
        setTimeout(() => {
            if (InventoryGet(player, itemgroup).Asset.Name === item1) {
                let propColor = InventoryGet(player, itemgroup).Color;

                InventoryWear(player, item2, itemgroup, propColor);
                ChatRoomCharacterUpdate(player); // Update appearance

            } else if (InventoryGet(player, itemgroup).Asset.Name === item2) {
                let propColor = InventoryGet(player, itemgroup).Color;

                InventoryWear(player, item1, itemgroup, propColor);
                ChatRoomCharacterUpdate(player); // Update appearance
            }
        }, 200 * i);
    }
}

/** @type { ActivityManagerInterface.ICustomActivity []} */
const activities = [
    {
        activity: {
            Name: "摇晃尾巴",
            Prerequisite: ["TargetHasTail"],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemButt"],
        },
        run: (player, sender, info) => {
            if (info.SourceCharacter === player.MemberNumber) {
                const asset = AssetGet("Female3DCG", "TailStraps", "穿戴式猫尾镜像_Luzi");
                if (!asset) return;
                shakeTail(player, "TailStraps", "TailStrap", "穿戴式猫尾镜像_Luzi");
                shakeTail(player, "TailStraps", "PuppyTailStrap", "穿戴式狗尾镜像_Luzi");
                shakeTail(player, "TailStraps", "PuppyTailStrap1", "穿戴式软小狗尾镜像_Luzi");
                shakeTail(player, "TailStraps", "KittenTailStrap1", "穿戴式浅色猫尾镜像_Luzi");
                shakeTail(player, "TailStraps", "KittenTailStrap2", "小型穿戴式软猫尾镜像_Luzi");
                shakeTail(player, "TailStraps", "FoxTailStrap1", "FoxTailStrap2");
                shakeTail(player, "TailStraps", "WolfTailStrap1", "大型穿戴式狼尾镜像_Luzi");
                shakeTail(player, "TailStraps", "WolfTailStrap2", "小型穿戴式狼尾镜像_Luzi");
                shakeTail(player, "TailStraps", "WolfTailStrap3", "白色穿戴式狼尾镜像_Luzi");
                shakeTail(player, "TailStraps", "DragonTailStrap2Left", "DragonTailStrap2Right");
            }
        },
        useImage: "Wiggle",
        label: {
            CN: "摇晃尾巴",
            EN: "Wag Tail",
        },
        dialog: {
            CN: "SourceCharacter摇晃PronounPossessive的尾巴.",
            EN: "SourceCharacter wags PronounPossessive tail.",
        },
    },
    {
        activity: {
            Name: "摇晃耳朵",
            Prerequisite: [
                (prereq, acting, acted, group) => !!InventoryGet(acted, "HairAccessory2"),
            ],
            MaxProgress: 50,
            Target: [],
            TargetSelf: ["ItemEars"],
        },
        run: (player, sender, info) => {
            if (info.SourceCharacter === player.MemberNumber) {
                const asset = AssetGet("Female3DCG", "HairAccessory2", "黑猫耳镜像_Luzi");
                if (!asset) return;
                shakeTail(player, "HairAccessory2", "KittenEars1", "黑猫耳镜像_Luzi");
            }
        },
        useImage: "Wiggle",
        label: {
            CN: "摇晃耳朵",
            EN: "Wag Ears",
        },
        dialog: {
            CN: "SourceCharacter摇晃PronounPossessive的耳朵.",
            EN: "SourceCharacter wags PronounPossessive's ears.",
        },
    },
];

export default function () {
    ActivityManager.addCustomActivities(activities);
}
