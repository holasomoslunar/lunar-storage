"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const categories = [
  { value: "all", label: "Todos" },
  { value: "make-up", label: "Maquillaje" },
  { value: "personal-care", label: "Cuidado Personal" },
  { value: "beauty-accessories", label: "Accesorios de belleza" },
];

interface FilterProps {
  category?: string;
  search?: string;
}

const Filter: React.FC<FilterProps> = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const updateQueryParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value && value !== "all") {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleSearchChange = useDebouncedCallback((query: string) => {
    updateQueryParam("query", query);
  }, 500);

  const handleCategoryChange = (category: string) => {
    updateQueryParam("category", category);
  };

  return (
    <div className="my-6 flex flex-col md:flex-row items-center justify-start gap-8">
      <div className="max-w-md w-full flex items-center justify-start gap-2">
        <Input
          type="search"
          placeholder="Burcar..."
          defaultValue={searchParams.get("query")?.toString()}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
      </div>

      <div className="max-w-md w-full flex items-center justify-start gap-2">
        <Label>Ver por</Label>
        <Select
          defaultValue={searchParams.get("category")?.toString() ?? "all"}
          onValueChange={handleCategoryChange}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecione una categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categorias</SelectLabel>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Filter;
