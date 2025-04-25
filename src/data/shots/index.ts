
import { frontFootDrive } from './frontFootDrive';
import { coverDrive } from './coverDrive';
import { pullShot } from './pullShot';
import { squareCut } from './squareCut';
import { straightDrive } from './straightDrive';
import { Shot } from '@/types';

export const shots: Shot[] = [
  frontFootDrive,
  coverDrive,
  pullShot,
  squareCut,
  straightDrive
];
