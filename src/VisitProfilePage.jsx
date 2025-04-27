import ProfileHeaderVisiting from "./components/ProfileHeaderVisiting";
import BottomNavigation from "./components/BottomNavigation";
import ProfileImagePost from "./components/ProfileImagePost";
import ProfileTextPost from "./components/ProfileTextPost";

export default function ProfilePage() {
  return (
    <div className="container flex flex-col gap-32 py-16 mb-76">
      <ProfileHeaderVisiting
        profileURL="profile-pictures/messenger-profile-picture.jpg"
        username="Player"
        description="Summoner by night, ⛹️‍♂️ LeBron stan by day, and forever binging anime arcs—crit hits, clutch shots, and epic plot twists. 🏆🎮📺"
        canDrag={false}
      />

      {/* content */}
      <div className="flex flex-col gap-44">
        <ProfileImagePost
          imageURL="post-images/lebron.jpg"
          description="Court-side dreamer shouting “King!” with every fadeaway—living for LeBron’s clutch genius, leadership, and GOAT-level hustle. 🏀👑"
          isLeft={false}
        />

        <ProfileTextPost
          title="Alchemist ⚗️"
          content="Pulled an all-nighter with Fullmetal Alchemist: Brotherhood—coffee untouched, heart rewired. Elric brothers taught Equivalent Exchange: give, gain, grow. Sunrise hit, scars felt lighter, resolve steel-strong. This anime is my compass, forging hope from loss. ⚗️✨"
        />

        <ProfileImagePost
          imageURL="post-images/league.jpg"
          description="Tilted again—solo-queue trolls, broken champs, and disappearing LP have me questioning my life choices. 😤"
          isLeft={true}
        />
      </div>

      <BottomNavigation />
    </div>
  );
}
