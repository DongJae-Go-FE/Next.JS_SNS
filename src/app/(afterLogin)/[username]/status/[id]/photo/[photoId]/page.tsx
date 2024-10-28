import Home from "@/app/(afterLogin)/home/page";

type Props = {
  username: string;
  id: string;
  photoId: string;
};

export default function page({ params }: Props) {
  return (
    <div>
      <Home />
    </div>
  );
}
