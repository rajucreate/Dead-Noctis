import React from 'react';
import { siteConfig } from '@/config/site';
import { useParallax } from '@/hooks/useParallax';
import { cn } from '@/utils/cn';

interface VoxelSceneProps {
  className?: string;
}

export const VoxelScene: React.FC<VoxelSceneProps> = ({ className }) => {
  const parallax = useParallax();

  return (
    <div
      className={cn(
        'absolute inset-0 z-0 overflow-hidden pointer-events-none select-none',
        className
      )}
      aria-hidden="true"
    >
      {/* Layer 1: Background Plate (Voxel Minecraft World) */}
      <div
        className="absolute inset-[-15px] bg-cover bg-[position:65%_center] md:bg-center transition-transform duration-100 ease-out will-change-transform"
        style={{
          backgroundImage: `url(${siteConfig.assetPaths.heroBackground})`,
          transform: `translate3d(${parallax.background.x}px, ${parallax.background.y}px, 0)`,
        }}
      />

      {/* Layer 2: Portal Layer Slot (Right side) */}
      {siteConfig.assetPaths.portalLayer ? (
        <div
          className="absolute right-[8%] top-[10%] w-[380px] h-[580px] bg-contain bg-center bg-no-repeat transition-transform duration-100 ease-out will-change-transform z-10"
          style={{
            backgroundImage: `url(${siteConfig.assetPaths.portalLayer})`,
            transform: `translate3d(${parallax.portal.x}px, ${parallax.portal.y}px, 0)`,
          }}
        />
      ) : (
        /* Subtle Portal Glow aura positioned over the portal coordinates */
        <div
          className="absolute right-[10%] md:right-[15%] top-[12%] md:top-[18%] w-[280px] md:w-[380px] h-[400px] md:h-[500px] rounded-full bg-accent-glow/20 blur-[80px] transition-transform duration-150 ease-out z-10"
          style={{
            transform: `translate3d(${parallax.portal.x}px, ${parallax.portal.y}px, 0)`,
          }}
        />
      )}

      {/* Layer 3: Character Layer Slot (Lower-center-right) */}
      {siteConfig.assetPaths.characterLayer ? (
        <div
          className="absolute right-[28%] md:right-[32%] bottom-[6%] w-[220px] md:w-[280px] h-[340px] md:h-[420px] bg-contain bg-center bg-no-repeat transition-transform duration-100 ease-out will-change-transform z-15"
          style={{
            backgroundImage: `url(${siteConfig.assetPaths.characterLayer})`,
            transform: `translate3d(${parallax.character.x}px, ${parallax.character.y}px, 0)`,
          }}
        />
      ) : (
        /* Character rim light aura */
        <div
          className="absolute right-[28%] bottom-[8%] w-[160px] h-[240px] rounded-full bg-accent-green/10 blur-[50px] transition-transform duration-150 ease-out z-15"
          style={{
            transform: `translate3d(${parallax.character.x}px, ${parallax.character.y}px, 0)`,
          }}
        />
      )}

      {/* Layer 4: Atmospheric Fog Mist */}
      {siteConfig.assetPaths.fogLayer ? (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 z-20"
          style={{ backgroundImage: `url(${siteConfig.assetPaths.fogLayer})` }}
        />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-t from-background-void via-transparent to-background-void/50 opacity-70 z-20"
        />
      )}

      {/* Layer 5: Left-to-Right Dark Gradient Overlay (Keeps text 100% readable) */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-background-void via-background-void/85 via-45% md:via-40% to-transparent z-25"
      />

      {/* Layer 6: Edge Vignette (Darkens top, bottom, left corners) */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(2,6,4,0.75)_100%)] z-30"
      />
    </div>
  );
};
