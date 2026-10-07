// Variant routing from the official @designcodeio/threeui 1.2.0 entry point.
// Registered implementation files remain byte-for-byte unchanged.
import { ConstellationField as Base, ParticleDrift, ParticleNetwork, GatewayFlow,
  ConnectivityGraph, InterfaceLines, DefenseLines, TopoField,
  type NeuformBatchEffectProps } from './neuform-isolated/NeuformBatchEffects';
const variants = { 'constellation-field': Base, 'particle-drift': ParticleDrift,
  'particle-network': ParticleNetwork, 'gateway-flow': GatewayFlow,
  'connectivity-graph': ConnectivityGraph, 'interface-lines': InterfaceLines,
  'defense-lines': DefenseLines, 'topo-field': TopoField };
export function ConstellationField({ variant = 'constellation-field', ...props }: NeuformBatchEffectProps) {
  const Component = variants[variant as keyof typeof variants] ?? Base;
  return <Component {...props} />;
}
