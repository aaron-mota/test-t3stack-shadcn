import React from "react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

interface MenuItem {
  trigger: string;
  subItems: SubMenuItem[];
}

interface SubMenuItem {
  type?: "checkbox" | "radio";
  label?: string;
  value?: string;
  shortcut?: string;
  isSeparator?: boolean;
  subMenu?: SubMenuItem[];
  disabled?: boolean;
  checked?: boolean;
  inset?: boolean;
}

const menuItems: MenuItem[] = [
  {
    trigger: "File",
    subItems: [
      {
        label: "New Tab",
        shortcut: "⌘T",
      },
      {
        label: "New Window",
        shortcut: "⌘N",
      },
      {
        label: "New Incognito Window",
      },
      {
        isSeparator: true,
      },
      {
        label: "Share",
        subMenu: [
          {
            label: "Email link",
          },
          {
            label: "Messages",
          },
          {
            label: "Notes",
          },
        ],
      },
      {
        isSeparator: true,
      },
      {
        label: "Print...",
        shortcut: "⌘P",
      },
    ],
  },
  {
    trigger: "Edit",
    subItems: [
      {
        label: "Undo",
        shortcut: "⌘Z",
      },
      {
        label: "Redo",
        shortcut: "⇧⌘Z",
      },
      {
        isSeparator: true,
      },
      {
        label: "Find",
        subMenu: [
          {
            label: "Search the web",
          },
          {
            isSeparator: true,
          },
          {
            label: "Find...",
          },
          {
            label: "Find Next",
          },
          {
            label: "Find Previous",
          },
        ],
      },
      {
        isSeparator: true,
      },
      {
        label: "Cut",
      },
      {
        label: "Copy",
      },
      {
        label: "Paste",
      },
    ],
  },
  {
    trigger: "View",
    subItems: [
      {
        label: "Always Show Bookmarks Bar",
        type: "checkbox",
        checked: true,
      },
      {
        label: "Always Show Full URLs",
        type: "checkbox",
        checked: true,
      },
      {
        isSeparator: true,
      },
      {
        label: "Reload",
        shortcut: "⌘R",
        inset: true,
      },
      {
        label: "Force Reload",
        shortcut: "⇧⌘R",
        disabled: true,
        inset: true,
      },
      {
        isSeparator: true,
      },
      {
        label: "Toggle Fullscreen",
        inset: true,
      },
      {
        isSeparator: true,
      },
      {
        label: "Hide Sidebar",
        inset: true,
      },
    ],
  },
  {
    trigger: "Profiles",
    subItems: [
      {
        type: "radio",
        label: "Andy",
        value: "andy",
      },
      {
        type: "radio",
        label: "Benoit",
        value: "benoit",
      },
      {
        type: "radio",
        label: "Luis",
        value: "Luis",
      },
      {
        isSeparator: true,
      },
      {
        label: "Edit...",
        inset: true,
      },
      {
        isSeparator: true,
      },
      {
        label: "Add Profile...",
        inset: true,
      },
    ],
  },
];

interface Props {}

export function CompanyLocationUserMenu({}: Props) {
  return (
    <>
      <Menubar>
        {menuItems.map((menuItem, index) => (
          <MenubarMenu key={index}>
            <MenubarTrigger>{menuItem.trigger}</MenubarTrigger>
            <MenubarContent>
              {menuItem.subItems.map((subItem, subIndex) => (
                <React.Fragment key={subIndex}>
                  {subItem.isSeparator ? (
                    <MenubarSeparator />
                  ) : subItem.type === "checkbox" ? (
                    <MenubarCheckboxItem
                      disabled={subItem.disabled}
                      checked={subItem.checked}
                    >
                      {subItem.label}
                      {subItem.shortcut && (
                        <MenubarShortcut>{subItem.shortcut}</MenubarShortcut>
                      )}
                    </MenubarCheckboxItem>
                  ) : subItem.type === "radio" ? (
                    <MenubarRadioGroup>
                      <MenubarRadioItem
                        disabled={subItem.disabled}
                        value={subItem.value!}
                      >
                        {subItem.label}
                        {subItem.shortcut && (
                          <MenubarShortcut>{subItem.shortcut}</MenubarShortcut>
                        )}
                      </MenubarRadioItem>
                    </MenubarRadioGroup>
                  ) : (
                    <MenubarItem
                      disabled={subItem.disabled}
                      inset={subItem.inset}
                    >
                      {subItem.label}
                      {subItem.shortcut && (
                        <MenubarShortcut>{subItem.shortcut}</MenubarShortcut>
                      )}
                    </MenubarItem>
                  )}
                  {subItem.subMenu && (
                    <MenubarSub>
                      <MenubarSubTrigger>{subItem.label}</MenubarSubTrigger>
                      <MenubarSubContent>
                        {subItem.subMenu.map(
                          (subMenuItem, subMenuItemIndex) => (
                            <React.Fragment key={subMenuItemIndex}>
                              {subMenuItem.isSeparator ? (
                                <MenubarSeparator />
                              ) : subItem.type === "checkbox" ? (
                                <MenubarCheckboxItem
                                  disabled={subMenuItem.disabled}
                                  checked={subMenuItem.checked}
                                >
                                  {subMenuItem.label}
                                  {subMenuItem.shortcut && (
                                    <MenubarShortcut>
                                      {subMenuItem.shortcut}
                                    </MenubarShortcut>
                                  )}
                                </MenubarCheckboxItem>
                              ) : subItem.type === "radio" ? (
                                <MenubarRadioGroup>
                                  <MenubarRadioItem
                                    disabled={subMenuItem.disabled}
                                    value={subMenuItem.value!}
                                  >
                                    {subMenuItem.label}
                                    {subMenuItem.shortcut && (
                                      <MenubarShortcut>
                                        {subMenuItem.shortcut}
                                      </MenubarShortcut>
                                    )}
                                  </MenubarRadioItem>
                                </MenubarRadioGroup>
                              ) : (
                                <MenubarItem
                                  disabled={subMenuItem.disabled}
                                  inset={subMenuItem.inset}
                                >
                                  {subMenuItem.label}
                                  {subMenuItem.shortcut && (
                                    <MenubarShortcut>
                                      {subMenuItem.shortcut}
                                    </MenubarShortcut>
                                  )}
                                </MenubarItem>
                              )}
                            </React.Fragment>
                          ),
                        )}
                      </MenubarSubContent>
                    </MenubarSub>
                  )}
                </React.Fragment>
              ))}
            </MenubarContent>
          </MenubarMenu>
        ))}
      </Menubar>
    </>
  );
}
