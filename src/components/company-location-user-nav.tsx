"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { company, locations, user } from "@/lib/mock_data/database";

export function CompanyLocationUserNav() {
  const [location, setLocation] = React.useState(locations[0]);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <div className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium opacity-60 transition-colors hover:text-accent-foreground focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
            <TriggerText
              label={company.name}
              avatar
              avatarSrc={company.hrefLogo}
            />
          </div>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <TriggerText
              label={location?.name ?? "Loading..."}
              avatar
              avatarSrc={location?.hrefLogo}
            />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {locations.map((location) => (
                <ListItem
                  key={location.id}
                  title={location.name}
                  onClick={() => setLocation(location)}
                >
                  {location.address}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <TriggerText
              label={user.name}
              avatar
              avatarSrc={user.hrefProfile}
            />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="#" title="Account Settings">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </ListItem>
              <ListItem href="#" title="Menu Item 2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </ListItem>
              <ListItem href="#" title="Menu Item 3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

interface TriggerTextProps {
  label?: string;
  avatar?: boolean;
  avatarSrc?: string;
  avatarFallback?: string;
}
const TriggerText = ({
  label,
  avatar,
  avatarSrc,
  avatarFallback,
}: TriggerTextProps) => (
  <>
    {avatar && (
      <Avatar className="mr-1 h-6 w-6">
        <AvatarImage src={avatarSrc} />
        <AvatarFallback>
          {avatarFallback ?? label?.slice(0, 1) ?? ""}
        </AvatarFallback>
      </Avatar>
    )}
    {label}
  </>
);
