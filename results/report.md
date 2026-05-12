# Code Splitting Benchmark Report

| Metric | No splitting | Route splitting | Component splitting | Lib splitting |
| --- | --- | --- | --- | --- |
| Initial JS Load (Dashboard) (KB) | TBD | TBD | TBD | TBD |
| Total JS Size (All Routes) (KB) | TBD | TBD | TBD | TBD |
| Dashboard TTI (ms) | TBD | TBD | TBD | TBD |
| Chunks on Initial Load (Count) | TBD | TBD | TBD | TBD |
| JS from Cache on App Update (%) | TBD | TBD | TBD | TBD |

## Network Screenshots

Add captured screenshots from `results/screenshots/`:
- Dashboard initial load
- Analytics navigation
- Editor navigation
- Cache behavior comparison

## Recommendation

Recommended strategy: use a hybrid approach combining route-level splitting as the default, component-level splitting for heavy non-critical UI (like modals/editors), and manual vendor chunks for large stable libraries to maximize cache reuse across deployments.
