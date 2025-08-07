import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Image as ImageIcon } from "lucide-react";

const ProductCardSkeleton = () => {
  return (
    <Card className="overflow-hidden p-0 border-none">
      <div className="relative">
        <Skeleton className="w-full h-48 rounded-t-lg rounded-b-none flex items-center justify-center">
          <ImageIcon className="size-16 opacity-20" />
        </Skeleton>
      </div>

      <CardContent className="p-4 space-y-3">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-6 w-12" />
      </CardContent>
    </Card>
  );
};

const CatalogSkeleton = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
    </div>
  );
};

export default CatalogSkeleton;
