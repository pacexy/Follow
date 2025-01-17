import { CollapseGroup } from "@renderer/components/ui/collapse"
import { useCollapseGroupItemState } from "@renderer/components/ui/collapse/hooks"
import { cn } from "@renderer/lib/utils"
import { setEntryContentPlaceholderLogoShow } from "@renderer/modules/entry-content/atoms"
import { useEffect } from "react"

import { DayOf } from "./constants"
import { DailyItem } from "./daily"
import type { DailyView } from "./types"

export const EntryPlaceholderDaily = ({
  view,
  className,
}: {
  view: DailyView
  className?: string
}) => (
  <div className={cn(className, "mx-auto flex w-[75ch] flex-col gap-6")}>
    <CollapseGroup>
      <CtxConsumer />
      <DailyItem day={DayOf.Today} view={view} />
      <DailyItem day={DayOf.Yesterday} view={view} />
    </CollapseGroup>
  </div>
)
const CtxConsumer = () => {
  const status = useCollapseGroupItemState()
  const isAllCollapsed = Object.values(status).every((v) => !v)
  useEffect(() => {
    setEntryContentPlaceholderLogoShow(isAllCollapsed)
  }, [isAllCollapsed])
  return null
}
