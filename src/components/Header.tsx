import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:scale-[1.02] hover:shadow-md",
            className
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

const Header = () => {
  return (
    <header className="sticky top-0 h-20 bg-primary backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-accent" />
          <span className="text-xl font-bold text-primary-foreground">VisionAbroad</span>
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
             <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} btn-hover-effect`}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem className="group nav-group">
              <NavigationMenuTrigger className="btn-hover-effect">
                Destinations
              </NavigationMenuTrigger>
              <NavigationMenuContent className="nav-content">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-background/95 backdrop-blur-sm shadow-lg rounded-lg border border-border/50">
                    <ListItem href="/countries" title="Country Guides">
                        Explore top study destinations like the USA, UK, Canada, and more.
                    </ListItem>
                    <ListItem href="/countries" title="University Rankings">
                        Compare QS and THE rankings for top universities worldwide.
                    </ListItem>
                    <ListItem href="/countries" title="Course Finder">
                        Find the perfect course that matches your interests.
                    </ListItem>
                    <ListItem href="/countries" title="Scholarship Opportunities">
                        Discover available scholarships and funding options.
                    </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="group nav-group">
              <NavigationMenuTrigger className="btn-hover-effect">
                Preparation
              </NavigationMenuTrigger>
              <NavigationMenuContent className="nav-content">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-background/95 backdrop-blur-sm shadow-lg rounded-lg border border-border/50">
                  <ListItem href="/loans" title="Education Loans">
                    Compare the best loan options from leading banks and NBFCs.
                  </ListItem>
                  <ListItem href="/consultancies" title="Consultancies">
                    Connect with trusted education consultants for expert guidance.
                  </ListItem>
                   <ListItem href="/packing-guide" title="Packing Guide">
                    A complete checklist for your study abroad journey.
                   </ListItem>
                   <ListItem href="/loans" title="Document Checklist">
                    Essential documents needed for your applications.
                   </ListItem>
                   <ListItem href="/consultancies" title="Visa Guidance">
                    Step-by-step visa application process.
                   </ListItem>
                   <ListItem href="/packing-guide" title="Pre-Departure Tips">
                    Everything you need to know before you travel.
                   </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
