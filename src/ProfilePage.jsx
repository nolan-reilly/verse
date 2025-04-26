import ProfileHeader from "./components/ProfileHeader";
import BottomNavigation from "./components/BottomNavigation";
import ProfileImagePost from "./components/ProfileImagePost";
import ProfileTextPost from "./components/ProfileTextPost";

export default function ProfilePage() {
  return (
    <div className="container flex flex-col gap-32 py-16 mb-48">
      <ProfileHeader
        profileURL="profile-pictures/user-profile-picture.jpg"
        username="User"
        description="Deadlifting otaku 🏋️‍♂️ with cat hair 😸 on my gym bag; share anime breakdowns 🎌, PR milestones 💪, daily feline chaos 🐾. Follow along."
        canDrag={true}
      />

      {/* content */}
      <div className="flex flex-col gap-44">
        <ProfileImagePost
          imageURL="post-images/04.jpg"
          description="A cat strums a tiny electric guitar 🎸, eyes closed in rock-star bliss, tail flicking to the beat 😺"
          isLeft={false}
        />

        <ProfileTextPost
          title="Minty Monday 💻"
          content="Booted into Linux Mint 🐧, ran a swift sudo apt update && upgrade ⚡, crushed code in VS Code 🖥️, tweaked the desktop just right 🎨, sipped victory coffee ☕, and powered down in mint-fresh style ✅."
        />

        <ProfileImagePost
          imageURL="post-images/exercise-05.jpg"
          description="Attack on Titan blasting, chalk swirling. Warm-ups easy, so I slapped on 405. One pull—bar bent, plates clanged, lockout hit. New PR, no back tweaks. Left reeking of iron and triumph."
          isLeft={true}
        />
      </div>

      <BottomNavigation />
    </div>
  );
}
