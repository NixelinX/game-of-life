import React, { FC, useMemo } from 'react';
import { ButtonsPanel } from '../ButtonsPanel/ButtonsPanel';
import { ButtonProps } from '../Button/Button';
import { Preset, presets } from '../../presets';

type PresetsProps = {
  setPreset: (preset: Preset) => void;
};

export const Presets: FC<PresetsProps> = ({ setPreset }) => {
  const buttons = useMemo<ButtonProps[]>(
    () =>
      presets.map((preset: Preset) => ({
        text: preset.title,
        onClick: () => setPreset(preset),
      })),
    [setPreset],
  );
  return <ButtonsPanel title="Presets" buttons={buttons} />;
};
