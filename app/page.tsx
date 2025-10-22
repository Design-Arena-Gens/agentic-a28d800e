'use client'

import { useState } from 'react'
import { MapPin, Calendar, Clock, Euro, Utensils, Car, Home as HomeIcon, Waves, Mountain, Sun, Info, ExternalLink, Users, Accessibility } from 'lucide-react'

interface Activity {
  time: string
  title: string
  description: string
  duration: string
  cost: string
  accessibility?: string
  link?: string
}

interface Restaurant {
  name: string
  cuisine: string
  priceRange: string
  specialty: string
  booking?: string
  accessibility?: string
}

interface DayPlan {
  day: number
  title: string
  theme: string
  activities: Activity[]
  restaurants: {
    lunch?: Restaurant
    dinner: Restaurant
  }
  notes: string[]
}

export default function Home() {
  const [selectedDay, setSelectedDay] = useState(1)
  const [showAccommodation, setShowAccommodation] = useState(false)
  const [showTransport, setShowTransport] = useState(false)

  const accommodations = [
    {
      name: "Hotel Al Madarig",
      type: "Boutique Hotel",
      price: "€120-180/night",
      features: ["Sea view rooms", "Rooftop terrace", "Traditional Sicilian architecture", "Central location"],
      booking: "https://www.booking.com/hotel/it/al-madarig.html",
      accessibility: "Limited accessibility - historic building with stairs"
    },
    {
      name: "Cala Marina Beach Resort",
      type: "Beach Resort",
      price: "€150-220/night",
      features: ["Direct beach access", "Pool", "Sea view balconies", "Restaurant on-site"],
      booking: "https://www.booking.com/search.html?ss=Castellammare+del+Golfo",
      accessibility: "Good accessibility - elevator and ground floor rooms available"
    },
    {
      name: "Villa Vista Mare (Airbnb)",
      type: "Private Villa",
      price: "€180-280/night",
      features: ["Panoramic sea views", "Private terrace", "Full kitchen", "2-4 bedrooms"],
      booking: "https://www.airbnb.com/s/Castellammare-del-Golfo--Italy",
      accessibility: "Varies by property - check individual listings"
    }
  ]

  const transportation = {
    rental: {
      companies: ["Europcar", "Sicily by Car", "Maggiore"],
      cost: "€35-60/day",
      booking: "https://www.rentalcars.com",
      notes: ["Book automatic transmission if preferred", "Full insurance recommended", "GPS included in most rentals"]
    },
    airport: {
      from: "Palermo Airport (Falcone Borsellino)",
      distance: "45km (35-40 minutes drive)",
      options: ["Rental car pickup at airport", "Private transfer: €80-100", "Bus + local taxi: €15-25"]
    }
  }

  const itinerary: DayPlan[] = [
    {
      day: 1,
      title: "Arrival & Settling In",
      theme: "Welcome to Sicily",
      activities: [
        {
          time: "10:00",
          title: "Arrival at Palermo Airport",
          description: "Collect rental car and begin scenic drive to Castellammare del Golfo along coastal road SS187",
          duration: "2 hours",
          cost: "Rental car €35-60/day",
          link: "https://www.rentalcars.com"
        },
        {
          time: "12:30",
          title: "Check-in & Refresh",
          description: "Settle into your accommodation, enjoy the sea views, unpack and relax",
          duration: "1.5 hours",
          cost: "Accommodation booked",
          accessibility: "Check with your accommodation for specific accessibility features"
        },
        {
          time: "15:00",
          title: "Explore Historic Center",
          description: "Stroll through the charming old town, visit the Norman Castle, walk along the harbor promenade",
          duration: "2 hours",
          cost: "Free",
          accessibility: "Old town has cobblestones; castle has steps but views from harbor promenade are accessible"
        },
        {
          time: "17:30",
          title: "Beach Sunset",
          description: "Relax at Playa Beach or Cala Petrolo, watch your first Sicilian sunset",
          duration: "1.5 hours",
          cost: "Free",
          accessibility: "Playa Beach has easier access; Cala Petrolo has steps"
        }
      ],
      restaurants: {
        lunch: {
          name: "La Cambusa del Capitano",
          cuisine: "Seafood",
          priceRange: "€15-25",
          specialty: "Fresh catch of the day, pasta con le sarde",
          accessibility: "Street level access"
        },
        dinner: {
          name: "Osteria Lo Bianco",
          cuisine: "Traditional Sicilian",
          priceRange: "€25-40",
          specialty: "Couscous alla trapanese, grilled fish, local wines",
          booking: "+39 0924 30217",
          accessibility: "Step-free entrance available"
        }
      },
      notes: [
        "Buy groceries for breakfast items at local markets",
        "Exchange some cash - small restaurants may not take cards",
        "Ask hotel for parking recommendations"
      ]
    },
    {
      day: 2,
      title: "Scopello & Zingaro Nature Reserve",
      theme: "Natural Beauty",
      activities: [
        {
          time: "08:30",
          title: "Drive to Scopello",
          description: "Visit the iconic Tonnara di Scopello (ancient tuna fishery) and Faraglioni rocks. Perfect for photos!",
          duration: "2 hours",
          cost: "€3 entrance to tonnara area",
          link: "https://www.tonarradiscopello.it",
          accessibility: "Limited - steep paths and stairs, but views from parking area available"
        },
        {
          time: "11:00",
          title: "Zingaro Nature Reserve Hike",
          description: "Hike the coastal trail (7km) or shorter routes. Swim in pristine coves (Cala Marinella, Cala Tonnarella)",
          duration: "4-5 hours",
          cost: "€5 entrance",
          link: "https://www.riservazingaro.it",
          accessibility: "Not wheelchair accessible - rugged terrain. Alternative: drive to viewpoints along SP63"
        },
        {
          time: "16:30",
          title: "Return & Pool Time",
          description: "Head back to hotel for relaxation by the pool or beach",
          duration: "2 hours",
          cost: "Free",
          accessibility: "Depends on accommodation"
        }
      ],
      restaurants: {
        lunch: {
          name: "Trattoria del Golfo (Scopello)",
          cuisine: "Local Sicilian",
          priceRange: "€12-20",
          specialty: "Panini with local ingredients, pane cunzato",
          accessibility: "Limited seating, some outdoor tables accessible"
        },
        dinner: {
          name: "Ristorante Al Faro",
          cuisine: "Seafood",
          priceRange: "€30-45",
          specialty: "Raw seafood platters, spaghetti ai ricci (sea urchin)",
          booking: "+39 0924 31199",
          accessibility: "Ramped entrance available"
        }
      },
      notes: [
        "Bring swimwear, towel, sun protection, and hiking shoes",
        "Pack water and snacks for the reserve - limited facilities",
        "Arrive at Zingaro early to avoid crowds and heat"
      ]
    },
    {
      day: 3,
      title: "Medieval Erice & Wine Tasting",
      theme: "Culture & Wine",
      activities: [
        {
          time: "09:00",
          title: "Drive to Erice",
          description: "Scenic mountain drive (40 min) to this medieval hilltop town with breathtaking views",
          duration: "45 minutes",
          cost: "Fuel only",
          accessibility: "Cobblestone streets in old town; main piazza accessible. Consider cable car from Trapani"
        },
        {
          time: "10:00",
          title: "Explore Erice",
          description: "Visit Norman Castle (Castello di Venere), Chiesa Madre, stroll ancient streets, try famous almond pastries",
          duration: "3 hours",
          cost: "Castle €5, pastries €5-10",
          accessibility: "Limited - medieval town with steep cobblestones and steps"
        },
        {
          time: "14:00",
          title: "Lunch Break",
          description: "Enjoy lunch with panoramic views",
          duration: "1.5 hours",
          cost: "See restaurant details",
          accessibility: "See restaurant details"
        },
        {
          time: "16:00",
          title: "Winery Visit - Baglio Baiata",
          description: "Tour local winery, taste Sicilian wines (Nero d'Avola, Grillo), learn about production",
          duration: "2 hours",
          cost: "€25-35 per person",
          link: "https://www.bagliobaiata.com",
          accessibility: "Call ahead - some wineries have accessible tasting rooms"
        }
      ],
      restaurants: {
        lunch: {
          name: "Monte San Giuliano (Erice)",
          cuisine: "Sicilian",
          priceRange: "€20-30",
          specialty: "Couscous, local pasta, panoramic terrace",
          accessibility: "Terrace has steps, indoor dining more accessible"
        },
        dinner: {
          name: "Peppe's Restaurant",
          cuisine: "Contemporary Sicilian",
          priceRange: "€25-35",
          specialty: "Fresh seafood with modern twist, excellent wine list",
          booking: "+39 0924 31108",
          accessibility: "Ground floor with step-free access"
        }
      },
      notes: [
        "Erice can be cool and windy - bring a light jacket",
        "Designate a driver for wine tasting or book a tour with transportation",
        "Visit Pasticceria Maria Grammatico for authentic almond sweets"
      ]
    },
    {
      day: 4,
      title: "Beach Day & Local Life",
      theme: "Relaxation",
      activities: [
        {
          time: "09:30",
          title: "Morning Market Visit",
          description: "Explore local fish market and produce vendors, see daily life, buy fresh ingredients",
          duration: "1 hour",
          cost: "€10-20 for purchases",
          accessibility: "Street level, can be crowded"
        },
        {
          time: "11:00",
          title: "Beach Time - Guidaloca",
          description: "Spend day at beautiful Guidaloca Beach (10 min drive), swimming, sunbathing, beach bar available",
          duration: "5 hours",
          cost: "Sunbed rental €15-20, free if you bring your own",
          accessibility: "Sandy beach with easier access than rocky coves"
        },
        {
          time: "17:00",
          title: "Cooking Class (Optional)",
          description: "Learn to make traditional Sicilian dishes - pasta, caponata, cannoli",
          duration: "3 hours",
          cost: "€70-90 per person",
          link: "https://www.cookly.me/sicily-cooking-classes",
          accessibility: "Most cooking schools accommodate various needs - inquire when booking"
        }
      ],
      restaurants: {
        lunch: {
          name: "Beach Bar at Guidaloca",
          cuisine: "Casual Sicilian",
          priceRange: "€10-18",
          specialty: "Panini, salads, fresh fruit, granita",
          accessibility: "Beachfront location, accessible"
        },
        dinner: {
          name: "Trattoria La Zagara",
          cuisine: "Home-style Sicilian",
          priceRange: "€20-30",
          specialty: "Family recipes, busiate trapanese, grilled calamari",
          accessibility: "Small venue with one step at entrance"
        }
      },
      notes: [
        "Apply sunscreen regularly - Sicilian sun is strong",
        "Beach gets busy by late morning - arrive early for best spots",
        "If skipping cooking class, enjoy a leisurely passeggiata (evening stroll) in town"
      ]
    },
    {
      day: 5,
      title: "San Vito Lo Capo & Salt Pans",
      theme: "Coastal Discovery",
      activities: [
        {
          time: "09:00",
          title: "Drive to San Vito Lo Capo",
          description: "One of Sicily's most beautiful beaches - white sand and turquoise water (40 min drive)",
          duration: "4 hours",
          cost: "Parking €5-10",
          accessibility: "Excellent - flat sandy beach with accessible facilities"
        },
        {
          time: "13:30",
          title: "Lunch at San Vito",
          description: "Enjoy fresh seafood at beachfront restaurant",
          duration: "1.5 hours",
          cost: "See restaurant details",
          accessibility: "See restaurant details"
        },
        {
          time: "15:30",
          title: "Trapani Salt Pans & Museum",
          description: "Visit historic salt pans, see windmills, learn about traditional salt harvesting, stunning sunset views",
          duration: "2 hours",
          cost: "Museum €3",
          link: "https://www.salineriestiglianomuseum.it",
          accessibility: "Flat terrain, accessible paths around salt pans"
        },
        {
          time: "18:00",
          title: "Return to Castellammare",
          description: "Scenic coastal drive back",
          duration: "45 minutes",
          cost: "Fuel",
          accessibility: "N/A"
        }
      ],
      restaurants: {
        lunch: {
          name: "Ristorante Syrah (San Vito)",
          cuisine: "Seafood",
          priceRange: "€25-35",
          specialty: "Couscous di pesce, grilled prawns",
          accessibility: "Beachfront with ramped access"
        },
        dinner: {
          name: "Cantine Garibaldi",
          cuisine: "Wine Bar & Tapas",
          priceRange: "€20-30",
          specialty: "Local wines, cheese and charcuterie platters, arancini",
          accessibility: "Street level entrance"
        }
      },
      notes: [
        "San Vito is perfect for swimming - calm, clear water",
        "Salt pans are magical at sunset - time your visit accordingly",
        "Stop at roadside vendors for fresh almonds and pistachios"
      ]
    },
    {
      day: 6,
      title: "Segesta & Wine Country",
      theme: "Ancient History",
      activities: [
        {
          time: "09:00",
          title: "Visit Segesta Archaeological Park",
          description: "Explore stunning Greek temple (5th century BC) and ancient theater with panoramic views",
          duration: "3 hours",
          cost: "€10 entrance",
          link: "https://www.segestarcheopark.it",
          accessibility: "Temple area accessible; theater requires uphill walk - shuttle bus available"
        },
        {
          time: "12:30",
          title: "Lunch at Agriturismo",
          description: "Farm-to-table lunch in the countryside",
          duration: "2 hours",
          cost: "€25-35 prix fixe menu",
          accessibility: "Most agriturismi have accessible ground floor dining"
        },
        {
          time: "15:00",
          title: "Afternoon at Leisure",
          description: "Return to hotel, enjoy pool/beach, or explore nearby villages (Balestrate, Trappeto)",
          duration: "4 hours",
          cost: "Free",
          accessibility: "Depends on chosen activity"
        }
      ],
      restaurants: {
        lunch: {
          name: "Agriturismo Fontanasalsa",
          cuisine: "Farm Restaurant",
          priceRange: "€25-35",
          specialty: "Multi-course traditional meal, house wine, organic ingredients",
          booking: "+39 0924 63030",
          accessibility: "Ground floor dining available"
        },
        dinner: {
          name: "Il Timone",
          cuisine: "Seafood & Pizza",
          priceRange: "€18-28",
          specialty: "Wood-fired pizza, fresh fish, casual atmosphere",
          accessibility: "Accessible entrance and restrooms"
        }
      },
      notes: [
        "Segesta is spectacular and less crowded than other sites",
        "Bring hat and water - limited shade at archaeological sites",
        "Consider visiting in morning to avoid afternoon heat"
      ]
    },
    {
      day: 7,
      title: "Final Day & Departure",
      theme: "Farewell Sicily",
      activities: [
        {
          time: "08:00",
          title: "Morning Swim & Breakfast",
          description: "Last swim in the Mediterranean, leisurely breakfast with sea views",
          duration: "2 hours",
          cost: "Free",
          accessibility: "Depends on accommodation"
        },
        {
          time: "10:30",
          title: "Souvenir Shopping",
          description: "Buy local products: olive oil, capers, wine, ceramics, almond sweets",
          duration: "1.5 hours",
          cost: "€30-100 for gifts",
          accessibility: "Most shops on main streets are accessible"
        },
        {
          time: "12:30",
          title: "Farewell Lunch",
          description: "Final Sicilian meal with harbor views",
          duration: "1.5 hours",
          cost: "See restaurant details",
          accessibility: "See restaurant details"
        },
        {
          time: "14:30",
          title: "Check-out & Drive to Airport",
          description: "Return rental car, depart from Palermo Airport",
          duration: "2 hours (incl. drive)",
          cost: "Fuel for return journey",
          accessibility: "N/A"
        }
      ],
      restaurants: {
        dinner: {
          name: "La Caravella",
          cuisine: "Seafood",
          priceRange: "€30-45",
          specialty: "Seafood pasta, grilled fish, harbor-side terrace",
          booking: "+39 0924 31499",
          accessibility: "Terrace seating with step-free access"
        }
      },
      notes: [
        "Allow 2.5 hours for airport return and car drop-off",
        "Refuel car before airport to avoid premium charges",
        "Save some euros for airport coffee and final arancino!"
      ]
    }
  ]

  const totalEstimatedCost = {
    accommodation: "€840-1,260 (7 nights)",
    carRental: "€245-420 (7 days)",
    food: "€490-630 (2 people)",
    activities: "€150-200",
    total: "€1,725-2,510 for two people"
  }

  const currentDay = itinerary.find(d => d.day === selectedDay)

  return (
    <main className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-sicilian-blue mb-4 flex items-center justify-center gap-3">
          <Waves className="w-12 h-12 text-sicilian-sea" />
          Sicily Holiday Planner
          <Sun className="w-12 h-12 text-sicilian-gold" />
        </h1>
        <p className="text-2xl text-gray-700 mb-2">7 Days in Castellammare del Golfo</p>
        <p className="text-lg text-gray-600">Trapani Province, Sicily, Italy</p>
      </div>

      {/* Quick Info Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <button
          onClick={() => setShowAccommodation(!showAccommodation)}
          className="glass-effect rounded-xl shadow-lg p-6 card-hover text-left"
        >
          <div className="flex items-center gap-3 mb-3">
            <HomeIcon className="w-8 h-8 text-sicilian-blue" />
            <h3 className="text-xl font-bold text-gray-800">Accommodation</h3>
          </div>
          <p className="text-gray-600">Boutique hotels & sea view apartments</p>
          <p className="text-sm text-sicilian-gold font-semibold mt-2">Click to explore options →</p>
        </button>

        <button
          onClick={() => setShowTransport(!showTransport)}
          className="glass-effect rounded-xl shadow-lg p-6 card-hover text-left"
        >
          <div className="flex items-center gap-3 mb-3">
            <Car className="w-8 h-8 text-sicilian-blue" />
            <h3 className="text-xl font-bold text-gray-800">Transportation</h3>
          </div>
          <p className="text-gray-600">Rental car recommended from Palermo</p>
          <p className="text-sm text-sicilian-gold font-semibold mt-2">Click for details →</p>
        </button>

        <div className="glass-effect rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <Euro className="w-8 h-8 text-sicilian-blue" />
            <h3 className="text-xl font-bold text-gray-800">Total Budget</h3>
          </div>
          <p className="text-gray-600">€1,725-2,510 (2 people)</p>
          <p className="text-sm text-gray-500 mt-2">Accommodation, food, activities & car</p>
        </div>
      </div>

      {/* Accommodation Details Modal */}
      {showAccommodation && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
            <button
              onClick={() => setShowAccommodation(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold"
            >
              ×
            </button>
            <h2 className="text-3xl font-bold text-sicilian-blue mb-6 flex items-center gap-3">
              <HomeIcon className="w-8 h-8" />
              Accommodation Options
            </h2>
            <div className="space-y-6">
              {accommodations.map((acc, idx) => (
                <div key={idx} className="border-2 border-sicilian-sea/20 rounded-xl p-6 hover:border-sicilian-sea transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{acc.name}</h3>
                      <p className="text-gray-600">{acc.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-sicilian-gold">{acc.price}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {acc.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-sicilian-sea rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-start gap-2 mb-4 bg-blue-50 p-3 rounded-lg">
                    <Accessibility className="w-5 h-5 text-sicilian-blue flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700">{acc.accessibility}</p>
                  </div>
                  <a
                    href={acc.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-sicilian-blue text-white px-6 py-3 rounded-lg hover:bg-sicilian-blue/90 transition-all"
                  >
                    Book Now
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Transportation Details Modal */}
      {showTransport && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
            <button
              onClick={() => setShowTransport(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold"
            >
              ×
            </button>
            <h2 className="text-3xl font-bold text-sicilian-blue mb-6 flex items-center gap-3">
              <Car className="w-8 h-8" />
              Transportation Guide
            </h2>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">From Palermo Airport</h3>
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-lg mb-2"><strong>Airport:</strong> {transportation.airport.from}</p>
                <p className="text-lg mb-4"><strong>Distance:</strong> {transportation.airport.distance}</p>
                <ul className="space-y-2">
                  {transportation.airport.options.map((option, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-sicilian-gold rounded-full"></span>
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Car Rental</h3>
              <div className="border-2 border-sicilian-gold/30 rounded-lg p-6">
                <p className="text-xl font-bold text-sicilian-gold mb-4">{transportation.rental.cost}</p>
                <p className="mb-3"><strong>Recommended Companies:</strong></p>
                <ul className="space-y-2 mb-4">
                  {transportation.rental.companies.map((company, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-sicilian-sea rounded-full"></span>
                      {company}
                    </li>
                  ))}
                </ul>
                <p className="mb-3"><strong>Important Notes:</strong></p>
                <ul className="space-y-2 mb-6">
                  {transportation.rental.notes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <Info className="w-4 h-4 text-sicilian-blue flex-shrink-0 mt-1" />
                      {note}
                    </li>
                  ))}
                </ul>
                <a
                  href={transportation.rental.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-sicilian-blue text-white px-6 py-3 rounded-lg hover:bg-sicilian-blue/90 transition-all"
                >
                  Compare Rental Cars
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Day Selector */}
      <div className="glass-effect rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Calendar className="w-7 h-7 text-sicilian-gold" />
          Select Your Day
        </h2>
        <div className="grid grid-cols-7 gap-3">
          {itinerary.map((day) => (
            <button
              key={day.day}
              onClick={() => setSelectedDay(day.day)}
              className={`p-4 rounded-lg font-bold transition-all ${
                selectedDay === day.day
                  ? 'bg-sicilian-blue text-white shadow-xl scale-105'
                  : 'bg-white text-gray-700 hover:bg-sicilian-sand hover:scale-105'
              }`}
            >
              <div className="text-2xl mb-1">Day {day.day}</div>
              <div className="text-xs font-normal">{day.theme}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Day Details */}
      {currentDay && (
        <div className="space-y-6">
          {/* Day Header */}
          <div className="glass-effect rounded-xl shadow-lg p-8">
            <h2 className="text-4xl font-bold text-sicilian-blue mb-2">{currentDay.title}</h2>
            <p className="text-xl text-gray-600 flex items-center gap-2">
              <Mountain className="w-6 h-6 text-sicilian-gold" />
              {currentDay.theme}
            </p>
          </div>

          {/* Activities */}
          <div className="glass-effect rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Clock className="w-7 h-7 text-sicilian-sea" />
              Daily Schedule
            </h3>
            <div className="space-y-4">
              {currentDay.activities.map((activity, idx) => (
                <div key={idx} className="border-l-4 border-sicilian-gold pl-6 py-4 hover:bg-sicilian-sand/30 rounded-r-lg transition-all">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <div>
                      <span className="inline-block bg-sicilian-blue text-white px-3 py-1 rounded-full text-sm font-bold mb-2">
                        {activity.time}
                      </span>
                      <h4 className="text-xl font-bold text-gray-800">{activity.title}</h4>
                    </div>
                    <div className="text-right">
                      <p className="text-sicilian-gold font-bold">{activity.cost}</p>
                      <p className="text-sm text-gray-600">{activity.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">{activity.description}</p>
                  <div className="flex flex-wrap gap-3 items-center">
                    {activity.link && (
                      <a
                        href={activity.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sicilian-sea hover:text-sicilian-blue text-sm font-semibold"
                      >
                        <ExternalLink className="w-4 h-4" />
                        More Info / Book
                      </a>
                    )}
                    {activity.accessibility && (
                      <div className="flex items-start gap-2 bg-blue-50 px-3 py-2 rounded-lg text-sm">
                        <Accessibility className="w-4 h-4 text-sicilian-blue flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{activity.accessibility}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Restaurants */}
          <div className="glass-effect rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Utensils className="w-7 h-7 text-sicilian-gold" />
              Where to Eat
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {currentDay.restaurants.lunch && (
                <div className="border-2 border-sicilian-sea/20 rounded-lg p-6 hover:border-sicilian-sea transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <Sun className="w-6 h-6 text-sicilian-gold" />
                    <span className="font-bold text-lg text-gray-600">LUNCH</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">{currentDay.restaurants.lunch.name}</h4>
                  <p className="text-gray-600 mb-2">{currentDay.restaurants.lunch.cuisine}</p>
                  <p className="text-sicilian-gold font-bold mb-3">{currentDay.restaurants.lunch.priceRange} per person</p>
                  <p className="text-gray-700 mb-3"><strong>Specialty:</strong> {currentDay.restaurants.lunch.specialty}</p>
                  {currentDay.restaurants.lunch.booking && (
                    <p className="text-sm text-gray-600 mb-3">📞 {currentDay.restaurants.lunch.booking}</p>
                  )}
                  {currentDay.restaurants.lunch.accessibility && (
                    <div className="flex items-start gap-2 bg-blue-50 p-3 rounded-lg">
                      <Accessibility className="w-4 h-4 text-sicilian-blue flex-shrink-0 mt-1" />
                      <p className="text-sm text-gray-700">{currentDay.restaurants.lunch.accessibility}</p>
                    </div>
                  )}
                </div>
              )}

              <div className="border-2 border-sicilian-gold/30 rounded-lg p-6 hover:border-sicilian-gold transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-6 h-6 text-sicilian-blue" />
                  <span className="font-bold text-lg text-gray-600">DINNER</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">{currentDay.restaurants.dinner.name}</h4>
                <p className="text-gray-600 mb-2">{currentDay.restaurants.dinner.cuisine}</p>
                <p className="text-sicilian-gold font-bold mb-3">{currentDay.restaurants.dinner.priceRange} per person</p>
                <p className="text-gray-700 mb-3"><strong>Specialty:</strong> {currentDay.restaurants.dinner.specialty}</p>
                {currentDay.restaurants.dinner.booking && (
                  <p className="text-sm text-gray-600 mb-3">📞 {currentDay.restaurants.dinner.booking}</p>
                )}
                {currentDay.restaurants.dinner.accessibility && (
                  <div className="flex items-start gap-2 bg-blue-50 p-3 rounded-lg">
                    <Accessibility className="w-4 h-4 text-sicilian-blue flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700">{currentDay.restaurants.dinner.accessibility}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Day Notes */}
          {currentDay.notes.length > 0 && (
            <div className="glass-effect rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Info className="w-7 h-7 text-sicilian-blue" />
                Important Notes
              </h3>
              <ul className="space-y-3">
                {currentDay.notes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-sicilian-gold text-xl font-bold">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Footer with Budget Summary */}
      <div className="mt-12 glass-effect rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Euro className="w-7 h-7 text-sicilian-gold" />
          Budget Breakdown (2 People)
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-white/50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Accommodation</p>
            <p className="text-xl font-bold text-sicilian-blue">{totalEstimatedCost.accommodation}</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Car Rental</p>
            <p className="text-xl font-bold text-sicilian-blue">{totalEstimatedCost.carRental}</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Food & Dining</p>
            <p className="text-xl font-bold text-sicilian-blue">{totalEstimatedCost.food}</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Activities</p>
            <p className="text-xl font-bold text-sicilian-blue">{totalEstimatedCost.activities}</p>
          </div>
          <div className="bg-sicilian-gold/20 rounded-lg p-4 border-2 border-sicilian-gold">
            <p className="text-sm text-gray-600 mb-1">Total Estimate</p>
            <p className="text-xl font-bold text-sicilian-blue">{totalEstimatedCost.total}</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-6 text-center">
          * Prices are estimates and may vary. Book accommodations and restaurants in advance during peak season (June-September).
        </p>
      </div>

      {/* Additional Tips */}
      <div className="mt-8 glass-effect rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Essential Travel Tips</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-lg text-sicilian-blue mb-3">Best Time to Visit</h4>
            <p className="text-gray-700">May-June or September-October for perfect weather and fewer crowds. July-August are hot and busy.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg text-sicilian-blue mb-3">What to Pack</h4>
            <p className="text-gray-700">Swimwear, sun protection, comfortable walking shoes, light layers, adapter plug (Type F/L), reusable water bottle.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg text-sicilian-blue mb-3">Local Customs</h4>
            <p className="text-gray-700">Learn basic Italian phrases, dress modestly in churches, enjoy the slow pace, tip 10% if service isn't included.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
