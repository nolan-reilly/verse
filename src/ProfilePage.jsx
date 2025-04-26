import ProfileHeader from "./components/ProfileHeader";
import BottomNavigation from "./components/BottomNavigation";

export default function ProfilePage() {
  return (
    <div className="container py-16">
      {/* Profile Header */}
      <ProfileHeader
        profileURL="profile-pictures/user-profile-picture.jpg"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit expedita fuga! Excepturi enim odio reprehenderit quos?!"
      />

      <BottomNavigation />
    </div>
  );
}
