# Cal.com Setup Guide - AnyBody Paddlesports

## Overview

Since Cal.com Teams requires a paid plan, we use a **naming convention approach** to organize event types by location while staying on the free tier.

## Naming Convention

All event types follow this pattern: `{Location} - {Event Name}`

Examples:

- `Miami - 2 Hour Guided Tour`
- `Key Largo - Sunset Tour`
- `Fort Lauderdale - Full Day Rental`

## Recommended Event Types Structure

### Miami Location

#### Guided Tours

1. **Miami - 1 Hour Guided Tour**
   - Duration: 60 minutes
   - Price: $75
   - Max participants: 4
   - Description: Perfect introduction to paddleboarding in Biscayne Bay

2. **Miami - 2 Hour Guided Tour**
   - Duration: 120 minutes
   - Price: $125
   - Max participants: 6
   - Description: Extended tour exploring mangroves and wildlife

3. **Miami - Sunset Tour**
   - Duration: 90 minutes
   - Price: $110
   - Max participants: 4
   - Description: Romantic sunset paddle with complimentary refreshments

#### Equipment Rentals

1. **Miami - Half Day Rental**
   - Duration: 240 minutes (4 hours)
   - Price: $60
   - Max participants: 2
   - Description: Premium paddleboard rental with all safety gear

2. **Miami - Full Day Rental**
   - Duration: 480 minutes (8 hours)
   - Price: $100
   - Max participants: 2
   - Description: All-day adventure rental with delivery options

### Key Largo Location

#### Guided Tours

1. **Key Largo - 2 Hour Eco Tour**
   - Duration: 120 minutes
   - Price: $135
   - Max participants: 6
   - Description: Explore pristine mangroves and local wildlife

2. **Key Largo - Sunset Tour**
   - Duration: 90 minutes
   - Price: $120
   - Max participants: 4
   - Description: Magical sunset experience in the Florida Keys

#### Equipment Rentals

1. **Key Largo - Half Day Rental**
   - Duration: 240 minutes
   - Price: $70
   - Max participants: 2

2. **Key Largo - Full Day Rental**
   - Duration: 480 minutes
   - Price: $120
   - Max participants: 2

### Fort Lauderdale Location

#### Guided Tours

1. **Fort Lauderdale - River Tour**
   - Duration: 90 minutes
   - Price: $95
   - Max participants: 8
   - Description: Urban waterway exploration

2. **Fort Lauderdale - Beach Tour**
   - Duration: 120 minutes
   - Price: $115
   - Max participants: 6

#### Equipment Rentals

1. **Fort Lauderdale - Half Day Rental**
   - Duration: 240 minutes
   - Price: $65
   - Max participants: 2

2. **Fort Lauderdale - Full Day Rental**
   - Duration: 480 minutes
   - Price: $105
   - Max participants: 2

## Setup Instructions

### 1. Manual Setup

1. Go to Cal.com dashboard
2. Create each event type with the naming convention above
3. Set appropriate durations, prices, and descriptions
4. Configure availability for each location

### 2. API-Driven Setup

Use the admin manager at `/admin/cal` to:

1. Select a location
2. Fill in event details
3. The system automatically creates the properly named event type

### 3. Booking Integration

Event types are referenced in the booking page using their slugs:

- `paddlesports/miami-2-hour-guided-tour`
- `paddlesports/key-largo-sunset-tour`
- etc.

## Benefits of This Approach

1. **Free Tier Compatible**: No need for paid team features
2. **Easy Filtering**: Admin can filter by location in the manager
3. **Clear Organization**: Users immediately see location in event name
4. **Scalable**: Easy to add new locations or event types
5. **SEO Friendly**: Location-specific URLs improve search visibility

## Environment Variables Needed

```bash
# Cal.com API Configuration
CAL_API_KEY=cal_live_your_api_key_here
CAL_BASE_URL=https://api.cal.com/v2
```

## Admin Manager Features

The custom admin manager provides:

- Location-based filtering
- Bulk event type creation
- Consistent naming conventions
- Easy editing and deletion
- Real-time preview of changes

## Cal.com Settings Recommendations

1. **Branding**: Set brand colors to match your site (#059669)
2. **Booking Page**: Customize with your logo and messaging
3. **Notifications**: Set up email confirmations for both you and customers
4. **Calendar Integration**: Connect Google Calendar or similar
5. **Payment Integration**: Set up Stripe for paid bookings
6. **Buffer Times**: Add 15-30 min buffer between bookings for setup/cleanup

## Next Steps

1. Create your Cal.com account
2. Generate API key from Settings > Security
3. Use the admin manager to create your first event types
4. Test the booking flow on your website
5. Configure payment processing if needed
6. Set up automated email confirmations
