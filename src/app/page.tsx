'use client';

import { PuredgeOS, PuredgeOSComponents } from '@/lib/puredgeos';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      fontFamily: PuredgeOS.typography.fontFamily.primary,
      color: PuredgeOS.colors.semantic.text.primary
    }}>
      {/* PuredgeOS Clarity: Main content with perfect hierarchy */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: `${PuredgeOS.spacing[8]} ${PuredgeOS.spacing[6]}`
      }}>
        {/* Hero Section - Crystal Clear Purpose */}
        <section style={{
          textAlign: 'center',
          marginBottom: PuredgeOS.spacing[20]
        }}>
          <h1 style={{
            fontSize: PuredgeOS.typography.fontSize['5xl'],
            fontWeight: PuredgeOS.typography.fontWeight.extrabold,
            color: PuredgeOS.colors.semantic.text.primary,
            margin: 0,
            marginBottom: PuredgeOS.spacing[6],
            lineHeight: PuredgeOS.typography.lineHeight.tight
          }}>
            Find Local Farm Shops
          </h1>
          
          <p style={{
            fontSize: PuredgeOS.typography.fontSize.xl,
            color: PuredgeOS.colors.semantic.text.secondary,
            margin: 0,
            marginBottom: PuredgeOS.spacing[8],
            lineHeight: PuredgeOS.typography.lineHeight.relaxed,
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Discover verified farm shops near you. Fresh, local produce directly from farmers.
          </p>

          {/* Clear Call-to-Action */}
          <a 
            href="/map"
            style={{
              ...PuredgeOSComponents.button.base,
              ...PuredgeOSComponents.button.primary,
              fontSize: PuredgeOS.typography.fontSize.lg,
              padding: `${PuredgeOS.spacing[4]} ${PuredgeOS.spacing[8]}`,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: PuredgeOS.spacing[3]
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            View Farm Map
          </a>
        </section>

        {/* Value Proposition - What Users Get */}
        <section style={{
          marginBottom: PuredgeOS.spacing[20]
        }}>
          <h2 style={{
            fontSize: PuredgeOS.typography.fontSize['3xl'],
            fontWeight: PuredgeOS.typography.fontWeight.bold,
            color: PuredgeOS.colors.semantic.text.primary,
            margin: 0,
            marginBottom: PuredgeOS.spacing[8],
            textAlign: 'center'
          }}>
            Why Choose Local Farms?
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: PuredgeOS.spacing[8]
          }}>
                         {/* Benefit 1 */}
             <div style={{
               padding: PuredgeOS.spacing[6],
               background: PuredgeOS.colors.semantic.background.secondary,
               borderRadius: PuredgeOS.borderRadius.lg,
               border: `1px solid ${PuredgeOS.colors.semantic.border.light}`
             }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: PuredgeOS.colors.primary[100],
                borderRadius: PuredgeOS.borderRadius.lg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: PuredgeOS.spacing[4]
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                </svg>
              </div>
              <h3 style={{
                fontSize: PuredgeOS.typography.fontSize.lg,
                fontWeight: PuredgeOS.typography.fontWeight.semibold,
                color: PuredgeOS.colors.semantic.text.primary,
                margin: 0,
                marginBottom: PuredgeOS.spacing[3]
              }}>
                Verified Quality
              </h3>
              <p style={{
                fontSize: PuredgeOS.typography.fontSize.base,
                color: PuredgeOS.colors.semantic.text.secondary,
                lineHeight: PuredgeOS.typography.lineHeight.relaxed,
                margin: 0
              }}>
                Every farm is personally verified for quality and authenticity.
              </p>
            </div>

                         {/* Benefit 2 */}
             <div style={{
               padding: PuredgeOS.spacing[6],
               background: PuredgeOS.colors.semantic.background.secondary,
               borderRadius: PuredgeOS.borderRadius.lg,
               border: `1px solid ${PuredgeOS.colors.semantic.border.light}`
             }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: PuredgeOS.colors.success[100],
                borderRadius: PuredgeOS.borderRadius.lg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: PuredgeOS.spacing[4]
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 style={{
                fontSize: PuredgeOS.typography.fontSize.lg,
                fontWeight: PuredgeOS.typography.fontWeight.semibold,
                color: PuredgeOS.colors.semantic.text.primary,
                margin: 0,
                marginBottom: PuredgeOS.spacing[3]
              }}>
                Fresh & Local
              </h3>
              <p style={{
                fontSize: PuredgeOS.typography.fontSize.base,
                color: PuredgeOS.colors.semantic.text.secondary,
                lineHeight: PuredgeOS.typography.lineHeight.relaxed,
                margin: 0
              }}>
                Get the freshest produce directly from local farmers.
              </p>
            </div>

                         {/* Benefit 3 */}
             <div style={{
               padding: PuredgeOS.spacing[6],
               background: PuredgeOS.colors.semantic.background.secondary,
               borderRadius: PuredgeOS.borderRadius.lg,
               border: `1px solid ${PuredgeOS.colors.semantic.border.light}`
             }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: PuredgeOS.colors.warning[100],
                borderRadius: PuredgeOS.borderRadius.lg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: PuredgeOS.spacing[4]
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 style={{
                fontSize: PuredgeOS.typography.fontSize.lg,
                fontWeight: PuredgeOS.typography.fontWeight.semibold,
                color: PuredgeOS.colors.semantic.text.primary,
                margin: 0,
                marginBottom: PuredgeOS.spacing[3]
              }}>
                No Ads, No Noise
              </h3>
              <p style={{
                fontSize: PuredgeOS.typography.fontSize.base,
                color: PuredgeOS.colors.semantic.text.secondary,
                lineHeight: PuredgeOS.typography.lineHeight.relaxed,
                margin: 0
              }}>
                Clean, distraction-free experience focused on what matters.
              </p>
            </div>
          </div>
        </section>

        {/* Current Farms - Real Value */}
        <section style={{
          marginBottom: PuredgeOS.spacing[20]
        }}>
          <h2 style={{
            fontSize: PuredgeOS.typography.fontSize['3xl'],
            fontWeight: PuredgeOS.typography.fontWeight.bold,
            color: PuredgeOS.colors.semantic.text.primary,
            margin: 0,
            marginBottom: PuredgeOS.spacing[8],
            textAlign: 'center'
          }}>
            Available Farms
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: PuredgeOS.spacing[6]
          }}>
                         {/* Farm 1 */}
             <div style={{
               padding: PuredgeOS.spacing[6],
               background: PuredgeOS.colors.semantic.background.primary,
               borderRadius: PuredgeOS.borderRadius.lg,
               border: `1px solid ${PuredgeOS.colors.semantic.border.light}`,
               boxShadow: PuredgeOS.shadows.sm
             }}>
              <h3 style={{
                fontSize: PuredgeOS.typography.fontSize.lg,
                fontWeight: PuredgeOS.typography.fontWeight.semibold,
                color: PuredgeOS.colors.semantic.text.primary,
                margin: 0,
                marginBottom: PuredgeOS.spacing[2]
              }}>
                Old Hall Farm
              </h3>
              <p style={{
                fontSize: PuredgeOS.typography.fontSize.sm,
                color: PuredgeOS.colors.semantic.text.secondary,
                margin: 0,
                marginBottom: PuredgeOS.spacing[3]
              }}>
                Test Lane, B10 0AA
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: PuredgeOS.spacing[2]
              }}>
                <span style={{
                  background: PuredgeOS.colors.primary[100],
                  color: PuredgeOS.colors.primary[700],
                  padding: `${PuredgeOS.spacing[1]} ${PuredgeOS.spacing[2]}`,
                  borderRadius: PuredgeOS.borderRadius.md,
                  fontSize: PuredgeOS.typography.fontSize.sm,
                  fontWeight: PuredgeOS.typography.fontWeight.medium
                }}>
                  Vegetables
                </span>
                <span style={{
                  background: PuredgeOS.colors.success[100],
                  color: PuredgeOS.colors.success[700],
                  padding: `${PuredgeOS.spacing[1]} ${PuredgeOS.spacing[2]}`,
                  borderRadius: PuredgeOS.borderRadius.md,
                  fontSize: PuredgeOS.typography.fontSize.sm,
                  fontWeight: PuredgeOS.typography.fontWeight.medium
                }}>
                  Dairy
                </span>
              </div>
            </div>

                         {/* Farm 2 */}
             <div style={{
               padding: PuredgeOS.spacing[6],
               background: PuredgeOS.colors.semantic.background.primary,
               borderRadius: PuredgeOS.borderRadius.lg,
               border: `1px solid ${PuredgeOS.colors.semantic.border.light}`,
               boxShadow: PuredgeOS.shadows.sm
             }}>
              <h3 style={{
                fontSize: PuredgeOS.typography.fontSize.lg,
                fontWeight: PuredgeOS.typography.fontWeight.semibold,
                color: PuredgeOS.colors.semantic.text.primary,
                margin: 0,
                marginBottom: PuredgeOS.spacing[2]
              }}>
                Green Valley Farm
              </h3>
              <p style={{
                fontSize: PuredgeOS.typography.fontSize.sm,
                color: PuredgeOS.colors.semantic.text.secondary,
                margin: 0,
                marginBottom: PuredgeOS.spacing[3]
              }}>
                Meadow Road, B15 2AA
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: PuredgeOS.spacing[2]
              }}>
                <span style={{
                  background: PuredgeOS.colors.warning[100],
                  color: PuredgeOS.colors.warning[700],
                  padding: `${PuredgeOS.spacing[1]} ${PuredgeOS.spacing[2]}`,
                  borderRadius: PuredgeOS.borderRadius.md,
                  fontSize: PuredgeOS.typography.fontSize.sm,
                  fontWeight: PuredgeOS.typography.fontWeight.medium
                }}>
                  Fruit
                </span>
                <span style={{
                  background: PuredgeOS.colors.success[100],
                  color: PuredgeOS.colors.success[700],
                  padding: `${PuredgeOS.spacing[1]} ${PuredgeOS.spacing[2]}`,
                  borderRadius: PuredgeOS.borderRadius.md,
                  fontSize: PuredgeOS.typography.fontSize.sm,
                  fontWeight: PuredgeOS.typography.fontWeight.medium
                }}>
                  Eggs
                </span>
              </div>
            </div>

                         {/* Farm 3 */}
             <div style={{
               padding: PuredgeOS.spacing[6],
               background: PuredgeOS.colors.semantic.background.primary,
               borderRadius: PuredgeOS.borderRadius.lg,
               border: `1px solid ${PuredgeOS.colors.semantic.border.light}`,
               boxShadow: PuredgeOS.shadows.sm
             }}>
              <h3 style={{
                fontSize: PuredgeOS.typography.fontSize.lg,
                fontWeight: PuredgeOS.typography.fontWeight.semibold,
                color: PuredgeOS.colors.semantic.text.primary,
                margin: 0,
                marginBottom: PuredgeOS.spacing[2]
              }}>
                Sunny Acres
              </h3>
              <p style={{
                fontSize: PuredgeOS.typography.fontSize.sm,
                color: PuredgeOS.colors.semantic.text.secondary,
                margin: 0,
                marginBottom: PuredgeOS.spacing[3]
              }}>
                Country Lane, B20 3BB
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: PuredgeOS.spacing[2]
              }}>
                <span style={{
                  background: PuredgeOS.colors.primary[100],
                  color: PuredgeOS.colors.primary[700],
                  padding: `${PuredgeOS.spacing[1]} ${PuredgeOS.spacing[2]}`,
                  borderRadius: PuredgeOS.borderRadius.md,
                  fontSize: PuredgeOS.typography.fontSize.sm,
                  fontWeight: PuredgeOS.typography.fontWeight.medium
                }}>
                  Vegetables
                </span>
                <span style={{
                  background: PuredgeOS.colors.warning[100],
                  color: PuredgeOS.colors.warning[700],
                  padding: `${PuredgeOS.spacing[1]} ${PuredgeOS.spacing[2]}`,
                  borderRadius: PuredgeOS.borderRadius.md,
                  fontSize: PuredgeOS.typography.fontSize.sm,
                  fontWeight: PuredgeOS.typography.fontWeight.medium
                }}>
                  Honey
                </span>
              </div>
            </div>
          </div>
        </section>

                 {/* Final CTA - Clear Next Step */}
         <section style={{
           textAlign: 'center',
           padding: PuredgeOS.spacing[12],
           background: PuredgeOS.colors.semantic.background.secondary,
           borderRadius: PuredgeOS.borderRadius.xl,
           border: `1px solid ${PuredgeOS.colors.semantic.border.light}`
         }}>
          <h2 style={{
            fontSize: PuredgeOS.typography.fontSize['2xl'],
            fontWeight: PuredgeOS.typography.fontWeight.bold,
            color: PuredgeOS.colors.semantic.text.primary,
            margin: 0,
            marginBottom: PuredgeOS.spacing[4]
          }}>
            Ready to Explore?
          </h2>
          <p style={{
            fontSize: PuredgeOS.typography.fontSize.lg,
            color: PuredgeOS.colors.semantic.text.secondary,
            margin: 0,
            marginBottom: PuredgeOS.spacing[6],
            lineHeight: PuredgeOS.typography.lineHeight.relaxed
          }}>
            View all farms on an interactive map and find the perfect local produce.
          </p>
          <a 
            href="/map"
            style={{
              ...PuredgeOSComponents.button.base,
              ...PuredgeOSComponents.button.primary,
              fontSize: PuredgeOS.typography.fontSize.lg,
              padding: `${PuredgeOS.spacing[4]} ${PuredgeOS.spacing[8]}`,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: PuredgeOS.spacing[3]
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Open Farm Map
          </a>
        </section>
      </main>
    </div>
  );
}
